// import React from 'react'

const Card = ({
  company,
  logo,
  featured,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
  handleAddText,
}) => {
  // const handleClick = (event) => {
  //   setArr(event.target.value);
  // };

  return (
    <>
      {/* div 0 */}
      <div className="flex flex-row items-center w-2/5 m-3 p-5 bg-white border-solid border-2 font-spartan rounded">
        {/* logo */}
        <div className="mr-3">
          <img src={logo} alt="company logo" />
        </div>
        {/* div 2 */}
        <div>
          {/* company, new, featured */}
          <div className="text-ddc font-bold text-sm">
            {company}
            {featured}
          </div>
          {/* position */}
          <div className="font-bold cursor-pointer my-1 hover:text-ddc">
            <p onClick={handleAddText}>{position}</p>
          </div>
          {/* postedAt, contract, location */}
          <div className="text-dgc flex text-sm font-semibold">
            <p className="mx-1 my-0">{postedAt}</p>
            <p className="mx-1 my-0">{contract}</p>
            <p className="mx-1 my-0">{location}</p>
          </div>
        </div>
        {/* role, level, lang, tools */}
        <div className="ml-auto text-ddc font-semibold flex">
          <p
            className="mx-1 my-0 bg-vd bg-lgc1 rounded font-bold p-1 cursor-pointer text-sm hover:text-lgc hover:bg-ddc"
            onClick={handleAddText}
          >
            {role}
          </p>
          <p
            className="mx-1 my-0 bg-vd bg-lgc1 rounded p-1 cursor-pointer font-bold text-sm hover:text-lgc hover:bg-ddc"
            onClick={handleAddText}
          >
            {level}
          </p>
          <p className="">
            {languages &&
              languages.map((lang, i) => {
                return (
                  <p
                    key={lang[i]}
                    className={`inline-block mx-1 my-0 bg-lgc1 rounded p-1 cursor-pointer font-bold text-sm hover:text-lgc hover:bg-ddc ${
                      i === languages.length - 1 ? "mr-0" : ""
                    } `}
                    onClick={handleAddText}
                  >
                    {lang}
                  </p>
                );
              })}
          </p>
          <p className="">
            {tools &&
              tools.map((tool, i) => {
                return (
                  <p
                    key={tool[i]}
                    className={`inline-block my-0 bg-lgc1 rounded p-1 cursor-pointer font-bold text-sm hover:text-lgc hover:bg-ddc mx-1 ${
                      i === tools.length - 1 ? "mr-0" : ""
                    }`}
                    onClick={handleAddText}
                  >
                    {tool}
                  </p>
                );
              })}
          </p>
        </div>
      </div>
    </>
  );
};
export default Card;
