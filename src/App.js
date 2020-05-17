import React from 'react';
import { useState } from "react";
import logo from './logo.svg';
import './App.css';
import { Navbar } from 'reactstrap';
import { NavbarBrand } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import Avatar from 'avataaars'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import git from './github.png';

const data = {
  topType: [
    "NoHair",
    "Eyepatch",
    "Hat",
    "Hijab",
    "Turban",
    "WinterHat1",
    "WinterHat2",
    "WinterHat3",
    "WinterHat4",
    "LongHairBigHair",
    "LongHairBob",
    "LongHairBun",
    "LongHairCurly",
    "LongHairCurvy",
    "LongHairDreads",
    "LongHairFrida",
    "LongHairFro",
    "LongHairFroBand",
    "LongHairNotTooLong",
    "LongHairShavedSides",
    "LongHairMiaWallace",
    "LongHairStraight",
    "LongHairStraight2",
    "LongHairStraightStrand",
    "ShortHairDreads01",
    "ShortHairDreads02",
    "ShortHairFrizzle",
    "ShortHairShaggyMullet",
    "ShortHairShortCurly",
    "ShortHairShortFlat",
    "ShortHairShortRound",
    "ShortHairShortWaved",
    "ShortHairSides",
    "ShortHairTheCaesar",
    "ShortHairTheCaesarSidePart"
  ],
  accessoriesType: [
    "Blank",
    "Kurt",
    "Prescription01",
    "Prescription02",
    "Round",
    "Sunglasses",
    "Wayfarers"
  ],
  hatColor: [
    "Black",
    "Blue01",
    "Blue02",
    "Blue03",
    "Gray01",
    "Gray02",
    "Heather",
    "PastelBlue",
    "PastelGreen",
    "PastelOrange",
    "PastelRed",
    "PastelYellow",
    "Pink",
    "Red",
    "White"
  ],
  hairColor: [
    "Auburn",
    "Black",
    "Blonde",
    "BlondeGolden",
    "Brown",
    "BrownDark",
    "PastelPink",
    "Platinum",
    "Red",
    "SilverGray"
  ],
  facialHairType: [
    "Blank",
    "BeardMedium",
    "BeardLight",
    "BeardMajestic",
    "MoustacheFancy",
    "MoustacheMagnum"
  ],
  facialHairColor: [
    "Auburn",
    "Black",
    "Blonde",
    "BlondeGolden",
    "Brown",
    "BrownDark",
    "Platinum",
    "Red"
  ],
  clotheType: [
    "BlazerShirt",
    "BlazerSweater",
    "CollarSweater",
    "GraphicShirt",
    "Hoodie",
    "Overall",
    "ShirtCrewNeck",
    "ShirtScoopNeck",
    "ShirtVNeck"
  ],
  clotheColor: [
    "Black",
    "Blue01",
    "Blue02",
    "Blue03",
    "Gray01",
    "Gray02",
    "Heather",
    "PastelBlue",
    "PastelGreen",
    "PastelOrange",
    "PastelRed",
    "PastelYellow",
    "Pink",
    "Red",
    "White"
  ],
  graphicType: [
    "Bat",
    "Cumbia",
    "Deer",
    "Diamond",
    "Hola",
    "Pizza",
    "Resist",
    "Selena",
    "Bear",
    "SkullOutline",
    "Skull"
  ],
  eyeType: [
    "Close",
    "Cry",
    "Default",
    "Dizzy",
    "EyeRoll",
    "Happy",
    "Hearts",
    "Side",
    "Squint",
    "Surprised",
    "Wink",
    "WinkWacky"
  ],
  eyebrowType: [
    "Angry",
    "AngryNatural",
    "Default",
    "DefaultNatural",
    "FlatNatural",
    "RaisedExcited",
    "RaisedExcitedNatural",
    "SadConcerned",
    "SadConcernedNatural",
    "UnibrowNatural",
    "UpDown",
    "UpDownNatural"
  ],
  mouthType: [
    "Concerned",
    "Default",
    "Disbelief",
    "Eating",
    "Grimace",
    "Sad",
    "ScreamOpen",
    "Serious",
    "Smile",
    "Tongue",
    "Twinkle",
    "Vomit"
  ],
  skinColor: [
    "Tanned",
    "Yellow",
    "Pale",
    "Light",
    "Brown",
    "DarkBrown",
    "Black"
  ]
};


const listTop = data.topType.map((number) =>
  <option value={number}>{number.replace(/([A-Z])/g, ' $1')}</option>
);
const listAccessories = data.accessoriesType.map((number) =>
  <option value={number}>{number.replace(/([A-Z])/g, ' $1')}</option>
);
const listHatColor = data.hatColor.map((number) =>
  <option value={number}>{number.replace(/([A-Z])/g, ' $1')}</option>
);
const listHairColor = data.hairColor.map((number) =>
  <option value={number}>{number.replace(/([A-Z])/g, ' $1')}</option>
);
const listFacialHair = data.facialHairType.map((number) =>
  <option value={number}>{number.replace(/([A-Z])/g, ' $1')}</option>
);
const listFacialColor = data.facialHairColor.map((number) =>
  <option value={number}>{number.replace(/([A-Z])/g, ' $1')}</option>
);
const listClothes = data.clotheType.map((number) =>
  <option value={number}>{number.replace(/([A-Z])/g, ' $1')}</option>
);
const listClothesColor = data.clotheColor.map((number) =>
  <option value={number}>{number.replace(/([A-Z])/g, ' $1')}</option>
);
const listEyes = data.eyeType.map((number) =>
  <option value={number}>{number.replace(/([A-Z])/g, ' $1')}</option>
);
const listEyebrows = data.eyebrowType.map((number) =>
  <option value={number}>{number.replace(/([A-Z])/g, ' $1')}</option>
);
const listMouth = data.mouthType.map((number) =>
  <option value={number}>{number.replace(/([A-Z])/g, ' $1')}</option>
);
const listSkin = data.skinColor.map((number) =>
  <option value={number}>{number.replace(/([A-Z])/g, ' $1')}</option>
);







function App() {

  const [mainState, setMain] = useState(
    {
      top:"ShortHairShortCurly",
      acc:"Blank",
      hairColor:"BrownDark",
      facialHair:"Blank",
      facialHairColor:"Brown",
      clotheType:"Hoodie",
      clotheColor:"Blue03",
      eyeType:"Happy",
      eyebrowType:"Default",
      mouthType:"Smile",
      skinType:"Light"
    }
  );


  function handleMainState(selected, id){
      const x = mainState;
      x[id]=selected;
      return setMain({top:x.top, acc:x.acc,
                      hairColor:x.hairColor, facialHair:x.facialHair,
                      facialHairColor:x.facialHairColor, clotheType:x.clotheType,
                      clotheColor:x.clotheColor, eyeType:x.eyeType, eyebrowType:x.eyebrowType,
                      mouthType:x.mouthType, skinType:x.skinType
                    });
    }






  return (
    <div className="App">
      <header className="App-header">
      <div className={"test"}>
      <h1>Avatar Creator</h1>
      <a href="https://github.com/AndrewTheo"><img width="65px" src={git} /></a>
      <Container fluid={true}>
        <Row xs="2">
          <Col xs="12"  md="6">
              <Avatar
                  style={{width: '250px', height: '250px'}}
                  avatarStyle='Circle'
                  topType={mainState.top}
                  accessoriesType={mainState.acc}
                  hairColor={mainState.hairColor}
                  facialHairType={mainState.facialHair}
                  facialHairColor={mainState.facialHairColor}
                  clotheType={mainState.clotheType}
                  clotheColor={mainState.clotheColor}
                  eyeType={mainState.eyeType}
                  eyebrowType={mainState.eyebrowType}
                  mouthType={mainState.mouthType}
                  skinColor={mainState.skinType}
             />

             <h6> Right click the image to save! </h6>
          </Col>
          <Col xs="12" md="6" className={"inputs"}>
                <Input type="select"  className={"inputs"} id = "skinType" name="select" onChange={event => handleMainState(event.target.value, event.target.id)}>
                    <option disabled selected value> -- Select Skin Color -- </option>
                    {listSkin}
                </Input>
                <Input type="select"  className={"inputs"} id = "top" selected="ShortHairShortCurly" name="select" onChange={event => handleMainState(event.target.value, event.target.id)}>
                    <option disabled selected value> -- Select a Hair Type -- </option>
                    {listTop}
                </Input>
                <Input type="select" className={"inputs"} id = "hairColor" name="select" onChange={event => handleMainState(event.target.value, event.target.id)}>
                    <option disabled selected value> -- Select Hair Color -- </option>
                    {listHairColor}
                </Input>
                <Input type="select"  className={"inputs"} id = "eyeType" name="select" onChange={event => handleMainState(event.target.value, event.target.id)}>
                    <option disabled selected value> -- Select Eye Type -- </option>
                    {listEyes}
                </Input>
                <Input type="select" className={"inputs"} id = "acc" name="select" onChange={event => handleMainState(event.target.value, event.target.id)}>
                    <option disabled selected value> -- Select Accessories -- </option>
                    {listAccessories}
                </Input>
                <Input type="select" className={"inputs"} id = "facialHair" name="select" onChange={event => handleMainState(event.target.value, event.target.id)}>
                     <option disabled selected value> -- Select Facial Hair -- </option>
                    {listFacialHair}
                </Input>
                <Input type="select" className={"inputs"} id = "facialHairColor" name="select" onChange={event => handleMainState(event.target.value, event.target.id)}>
                    <option disabled selected value> -- Select Facial Hair Color -- </option>
                    {listFacialColor}
                </Input>
                <Input type="select" className={"inputs"} id = "clotheType" name="select" onChange={event => handleMainState(event.target.value, event.target.id)}>
                    <option disabled selected value> -- Select Clothes -- </option>
                    {listClothes}
                </Input>
                <Input type="select" className={"inputs"} id = "clotheColor" name="select" onChange={event => handleMainState(event.target.value, event.target.id)}>
                    <option disabled selected value> -- Select Clothes Color -- </option>
                    {listClothesColor}
                </Input>

                <Input type="select" className={"inputs"} id = "eyebrowType" name="select" onChange={event => handleMainState(event.target.value, event.target.id)}>
                    <option disabled selected value> -- Select Eyebrow Type -- </option>
                    {listEyebrows}
                </Input>
                <Input type="select" className={"inputs"} id = "mouthType" name="select" onChange={event => handleMainState(event.target.value, event.target.id)}>
                      <option disabled selected value> -- Select Mouth Type -- </option>
                    {listMouth}
                </Input>




          </Col>
        </Row>
       </Container>
       </div>

      </header>
    </div>
  );
}

export default App;
