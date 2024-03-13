import Link from 'next/link';

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-green-700">
        <span className='text-yellow-500'>4</span>
        <span className='text-red-600'>0</span>
        <span className='text-blue-600'>4</span> - Página no encontrada</h1>
      <p className="text-gray-600">Lo sentimos, la página que estás buscando no existe.</p>
      <Link href="/"
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Volver al inicio
        </Link>
    </div>
  );
};

export default NotFoundPage;