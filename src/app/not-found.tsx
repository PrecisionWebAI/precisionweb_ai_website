import { NextPageContext } from 'next';
import Link from 'next/link';

interface ErrorPageProps {
  statusCode?: number;
}

const ErrorPage = ({ statusCode }: ErrorPageProps) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800">
        {statusCode ? `Error ${statusCode}` : 'An unexpected error has occurred'}
      </h1>
      <p className="mt-4 text-xl text-gray-600">
        {statusCode === 404
          ? 'Sorry, the page you are looking for does not exist.'
          : 'Something went wrong.'}
      </p>
      <Link href="/">
        <div className="mt-6 px-4 py-2 text-lg font-medium text-white bg-blue-600 rounded hover:bg-blue-700">
          Go back to Home
        </div>
      </Link>
    </div>
  );
};

ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res?.statusCode || err?.statusCode || 404;
  return { statusCode };
};

export default ErrorPage;
