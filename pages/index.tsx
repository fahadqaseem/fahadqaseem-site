import Head from 'next/head';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <Head>
        <title>Fahad Qaseem</title>
        <meta name="description" content="Fahad Qaseem - Personal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white via-blue-50 to-blue-100 text-gray-800 px-4">
        <motion.h1
          className="text-5xl font-extrabold mb-4 text-center tracking-tight"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hi, I&#39;m <span className="text-blue-600">Fahad Qaseem</span>
        </motion.h1>

        <motion.p
          className="text-lg text-center max-w-xl mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          I&#39;m a video editor, storyteller, and creative thinker. I help brands craft engaging content that connects and converts.
        </motion.p>

        <motion.a
          href="mailto:contact@fahadqaseem.com"
          className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Contact Me
        </motion.a>
      </main>
    </>
  );
}
