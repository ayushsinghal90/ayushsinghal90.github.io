const Carousel = ({
  ChildComponent,
  list,
  carouselMargin = "lg:my-10",
  elementMargin = "[&_li]:mx-8",
}) => {
  return (
    <div
      className={`w-full ${carouselMargin} inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]`}
    >
      <ul
        className={`flex items-center justify-center md:justify-start ${elementMargin} [&_img]:max-w-none animate-infinite-scroll`}
      >
        {list.map((data, index) => (
          <li key={index}>
            <ChildComponent data={data} />
          </li>
        ))}
      </ul>
      <ul
        className={`flex items-center justify-center md:justify-start ${elementMargin} [&_img]:max-w-none animate-infinite-scroll`}
        aria-hidden="true"
      >
        {list.map((data, index) => (
          <li key={index}>
            <ChildComponent data={data} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Carousel;
