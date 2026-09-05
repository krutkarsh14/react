function Image() {
    const name = "Anup kumar "
  return (
    <div style={{ width: "300px", height: "300px", overflow: "hidden" }}>
      <img
        src="https://hips.hearstapps.com/hmg-prod/images/shibainu-dog-royalty-free-image-1752089989.pjpeg?crop=1xw:1xh;center,top"
        alt=""
        srcset=""
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
      <h1>{name}</h1>
    </div>
  );
}
export default Image;
