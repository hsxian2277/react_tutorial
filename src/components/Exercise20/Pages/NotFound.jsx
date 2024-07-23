import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

// Template not found component
export default function NotFound() {
  const history = useHistory();

  const handleBack = () => {
    history.push('/');
  }

  return (
    <div>
      <h1>404 Page Not Found</h1>
      <button onClick={handleBack}>Back to homepage</button>
    </div>
  );
};