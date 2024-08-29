export const PageLayout = ({ image, title, caption }) => {
    return (
      <div className="min-h-screen py-8">
        <header className="mb-2">
          <div className="flex flex-col justify-between items-center ">
            <div></div>
            <h1 className="text-2xl font-semibold">{title}</h1>
            <div className="text-gray-600 mt-2 text-xl">{caption}</div>
          </div>
        </header>
  
        <div className="w-full h-screen flex justify-center items-center p-5">
          <img
            src={image}
            alt={title}
            className="shadow-lg rounded-xl object-contain"
          />
        </div>
      </div>
    );
  };
  