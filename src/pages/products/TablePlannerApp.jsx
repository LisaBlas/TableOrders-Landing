import { useEffect } from 'react';
import PageLayout from '../../components/layout/PageLayout';

export default function TablePlannerApp() {
  useEffect(() => {
    document.title = 'Table Planner Demo - Blas';
  }, []);

  return (
    <PageLayout>
      <div style={{
        width: '100%',
        height: 'calc(100vh - 80px)',
        overflow: 'hidden'
      }}>
        <iframe
          src="/table-planner.html"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            display: 'block'
          }}
          title="Table Planner Demo"
        />
      </div>
    </PageLayout>
  );
}
