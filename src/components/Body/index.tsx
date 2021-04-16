import styled from "styled-components";

const TextBlock = styled.p`
  text-align: center;
  @media (max-width: 768px) {
    width: 450px;
  }
  @media (max-width: 500px) {
    width: 320px;
  }
`;

const ImgContainer = styled.img`
  width: 500px;
  @media (max-width: 768px) {
    width: 400px;
  }
  @media (max-width: 500px) {
    width: 270px;
  }
`;

function Body(props: any) {
  return (
    <div
      style={{
        width: "700px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h3
        style={{
          fontSize: "20px",
          fontWeight: 700,
          borderBottom: "1px solid gray",
          letterSpacing: "3px",
        }}
      >
        {props.title}
      </h3>
      <TextBlock style={{ padding: "20px 0" }}>
        Zara is one of the world's largest international fashion companies . It
        belongs to Inditex, the world’s biggest fashion group.
      </TextBlock>

      <ImgContainer alt="photo" src={props.photoURL} />
      <TextBlock style={{ padding: "30px 0" }}>
        Zara is a Spanish clothing retailer based in Galicia, Spain. Founded by
        Amancio Ortega in 1975, it is the flagship chain store of the Inditex
        group, the world's largest apparel retailer. The fashion group also owns
        brands such as Pull&Bear, Massimo Dutti, Bershka, Stradivarius, Oysho,
        Zara Home and Uterqüe. The company operates over 2,220 stores and is
        present in 88 countries. Zara has consistently acted as a pioneer in
        fast fashion based in a higly responsive supply chain. The customer is
        at the heart of a unique business model, which includes design,
        production, distribution and sales through our extensive retail network.
      </TextBlock>
    </div>
  );
}

export default Body;
