import {
  HomePage
} from '@/components/pages/index'

export default function Home() {
  return (
     <main className="w-screen">
        {/* Home Section */}
        <section className="w-fulls h-screen">
            <HomePage/>
        </section>
     </main>
  );
}
