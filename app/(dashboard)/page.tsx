import { Button } from '@/components/ui/button';
import { ArrowRight, CreditCard, Database , FileUp, Pencil, Share} from 'lucide-react';





const ResponsiveVideoEmbed = () => {
  return (
    <div className="relative w-full aspect-[1/1.29]">
      <video
        autoPlay
        muted
        controls
        loop
        playsInline
      >
        <source src="https://unwrap-gifts.s3.us-west-1.amazonaws.com/demo.mp4" type="video/mp4" />
      </video>
    </div>
  );
};



export default function HomePage() {
  return (
    <main>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl md:text-6xl">
              Transform Research Papers into 


                <span className="block text-orange-500">Viral Social Videos</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Turn complex academic papers into engaging social media content in minutes. Perfect for researchers, science communicators, and curious minds.
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                {/* <a
                  href="https://vercel.com/templates/next.js/next-js-saas-starter"
                  target="_blank"
                >
                  <Button className="bg-white hover:bg-gray-100 text-black border border-gray-200 rounded-full text-lg px-8 py-4 inline-flex items-center justify-center">
                    Deploy your own
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a> */}
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              {/* <Terminal /> */}
              <ResponsiveVideoEmbed />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <div>
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                <FileUp className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-gray-900">
                  Upload Your ArXiv Paper
                </h2>
                <p className="mt-2 text-base text-gray-500">
                  Simply paste an ArXiv link or upload a paper. Papersnap's AI instantly extracts the key findings, methodology, and groundbreaking discoveries.
                </p>
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                <Pencil className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-gray-900">
                  Customize Your Style
                </h2>
                <p className="mt-2 text-base text-gray-500">
                  Select colors, animations, and add your logo to make your research stand out.
                </p>
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                <Share className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-gray-900">
                  Share & Engage
                </h2>
                <p className="mt-2 text-base text-gray-500">
                  Turn dense research into digestible content that captivates your audience and sparks meaningful discussions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Ready to create engaging papers?
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                Papersnap is a tool that helps you create engaging papers for your social media.
              </p>
            </div>
            <div className="mt-8 lg:mt-0 flex justify-center lg:justify-end">
              <a
                href="/sign-up"
                target="_blank"
              >
                <Button className="bg-white hover:bg-gray-100 text-black border border-gray-200 rounded-full text-xl px-12 py-6 inline-flex items-center justify-center">
                  Get Started
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
