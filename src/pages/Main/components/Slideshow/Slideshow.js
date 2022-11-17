const Slideshow = props => {
  const { classReplace } = props;

  const slide1Checked = classReplace == 'slide1';
  const slide2Checked = classReplace == 'slide2';
  const slide3Checked = classReplace == 'slide3';

  return (
    <div className="mainImgBox">
      <div className={classReplace}>
        <img
          className="mainImg"
          src="https://miricanvas.zendesk.com/hc/article_attachments/900004854466/___________8_.png"
        />

        <img
          className="mainImg"
          src="https://marketplace.canva.com/EAEvZlcZxoI/1/0/1600w/canva-%EA%B0%88%EC%83%89-%EB%85%B8%EB%9E%80%EC%83%89-%EC%9A%94%EB%A6%AC%EC%82%AC%EC%A7%84-%EC%A0%9C%EC%B2%A0%EC%9D%8C%EC%8B%9D-%EC%9C%A0%ED%88%AC%EB%B8%8C-%EC%8D%B8%EB%84%A4%EC%9D%BC-K-OmdW60550.jpg"
        />

        <img
          className="mainImg"
          src="https://img.freepik.com/premium-vector/how-to-cook-rice-an-easy-recipe_277904-2645.jpg?w=2000"
        />
      </div>

      <div className="slideShowChckeBox">
        <input type="radio" checked={slide1Checked} />

        <input type="radio" checked={slide2Checked} />

        <input type="radio" checked={slide3Checked} />
      </div>
    </div>
  );
};

export default Slideshow;
