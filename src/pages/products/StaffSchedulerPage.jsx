import { useEffect } from 'react';
import PageLayout from '../../components/layout/PageLayout';

export default function StaffSchedulerPage() {
  useEffect(() => {
    document.title = 'Staff Scheduler Demo - Blas';
  }, []);

  return (
    <PageLayout>
      <div style={{
        width: '100%',
        height: 'calc(100vh - 80px)',
        overflow: 'hidden'
      }}>
        <iframe
          src="/staff-scheduler.html"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            display: 'block'
          }}
          title="Staff Scheduler Demo"
        />
      </div>
    </PageLayout>
  );
}
