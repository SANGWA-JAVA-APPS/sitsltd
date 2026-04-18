import { useEffect } from 'react';
import { useAppContext } from '../../../context/AppContext';
import { JobsApi } from '../../../Apis';
import Table from '../Table/Table';
import './Jobs.scss';

const COLUMNS = [
  { key: 'title',    label: 'Job Title',    sortable: true  },
  { key: 'location', label: 'Location',     sortable: true  },
  { key: 'type',     label: 'Type',         sortable: true  },
  { key: 'posted',   label: 'Posted',       sortable: true  },
  { key: 'status',   label: 'Status',       sortable: false },
];

const SAMPLE_JOBS = [
  { id: 1, title: 'Frontend Developer',  location: 'Nairobi', type: 'Full-time', posted: '2026-03-01', status: 'Open'   },
  { id: 2, title: 'Backend Engineer',    location: 'Remote',  type: 'Contract',  posted: '2026-03-10', status: 'Open'   },
  { id: 3, title: 'UI/UX Designer',      location: 'Mombasa', type: 'Full-time', posted: '2026-02-20', status: 'Closed' },
  { id: 4, title: 'DevOps Engineer',     location: 'Nairobi', type: 'Full-time', posted: '2026-03-15', status: 'Open'   },
  { id: 5, title: 'Data Analyst',        location: 'Kisumu',  type: 'Part-time', posted: '2026-03-18', status: 'Open'   },
  { id: 6, title: 'QA Engineer',         location: 'Remote',  type: 'Contract',  posted: '2026-03-20', status: 'Open'   },
  { id: 7, title: 'Project Manager',     location: 'Nairobi', type: 'Full-time', posted: '2026-02-28', status: 'Closed' },
  { id: 8, title: 'Mobile Developer',    location: 'Mombasa', type: 'Full-time', posted: '2026-03-22', status: 'Open'   },
];

function Jobs() {
  const { jobs, setJobs, loading, setLoading } = useAppContext();

  useEffect(() => {
    if (jobs.length > 0) return; // already loaded
    setLoading(true);
    JobsApi.getAll()
      .then(setJobs)
      .catch(() => setJobs(SAMPLE_JOBS))
      .finally(() => setLoading(false));
  }, []);

  const rows = jobs.length > 0 ? jobs : SAMPLE_JOBS;

  return (
    <div className="jobs">
      <h2 className="jobs__title">Current Openings</h2>
      <p className="jobs__subtitle text-muted">
        Explore our latest opportunities and find your perfect role.
      </p>
      {loading ? (
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading…</span>
          </div>
        </div>
      ) : (
        <Table
          columns={COLUMNS}
          data={rows}
          filterPlaceholder="Search by title, location, type…"
        />
      )}
    </div>
  );
}

export default Jobs;
