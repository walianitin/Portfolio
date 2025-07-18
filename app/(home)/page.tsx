
import dynamic from 'next/dynamic';

const InitialLandingPage = dynamic(() => import('@/components/IntialLandingPage'), {
  ssr: false,
  loading: () => <div className="flex justify-center items-center min-h-screen">Loading...</div>
});

export default function Page() {
    return (
        <>
        <div>
            <InitialLandingPage />
        </div>  
        </>
    )
}

