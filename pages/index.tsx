import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Fahad Qaseem</title>
        <meta name="description" content="Fahad Qaseem - Personal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      // <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white via-blue-50 to-blue-100 text-gray-800 px-4">
      <h1 className="text-5xl font-extrabold mb-4 text-center tracking-tight">
      Hi, I&#39;m <span className="text-blue-600">Fahad Qaseem</span>
      </h1>
      <p className="text-lg text-center max-w-xl mb-6">
      I&#39;m a video editor, storyteller, and creative thinker. I help brands craft engaging content that connects and converts.
      </p>
      <a
      href="mailto:fahad@example.com"
      className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg"
      >
      Contact Me
      </a>
      </main>

      <main className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800 px-4">
        
        <h1 className="text-5xl font-bold mb-4">Hi, I&#39;m Fahad Qaseem</h1>
        <p>I help brands craft engaging content that connects and converts.</p>
        
        <a
          href="mailto:fahad@example.com"
          className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Contact Me
        </a>
      </main>
    </>
  );
}