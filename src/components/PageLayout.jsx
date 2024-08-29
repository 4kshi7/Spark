export const PageLayout = ({ image, title, caption }) => {
    return (
      <div className="min-h-screen py-2 px-4 sm:px-6 md:px-8 lg:px-12">
        <header className="mb-4">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-2xl font-semibold mb-2 sm:text-3xl">{title}</h1>
            <div className="text-gray-600 text-lg sm:text-xl">{caption}</div>
          </div>
        </header>
  
        <div className="w-full h-80 sm:h-96 md:h-1/2 lg:h-2/3 flex justify-center items-center">
          <img
            src={image}
            alt={title}
            className="shadow-lg rounded-xl object-cover w-full h-full"
          />
        </div>
      </div>
    );
  };
  