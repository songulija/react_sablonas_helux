import React from 'react'
import { Form, Button, Carousel, Image } from 'react-bootstrap';
import { Checkbox } from 'antd'

import vision from '../images/009-vision.png';
import mission from '../images/004-mission.png'
import purpose from '../images/006-purpose.png'
import wagon1 from '../images/wagons-1.jpg'
import wagon2 from '../images/wagons-4.jpg'
import wagon3 from '../images/wagons-3.png'
import gelezinkeliai from '../images/lietuvos_gelezinkeliai.jpg';
import ldzcargo from '../images/ldzcargo1.png';
import logo_bzhd from '../images/logo_bzhd.png';
import simvolika from '../images/simvolika-1.jpg';

import '../styles/Home.css'
import {
    aboutTextStyle, aboutParagraphsTitlesStyles, aboutParagraphsTextStyles, serviceSectionStyle,
    serviceText, serviceTitleStyle, sectionTitleStyle, cargosTextStyle, cargoPhotoTitle, cargoPhotoText, partnersTitlesStyle,
    contactsInfoTitle, contactsInfoText, titleLineStyle
} from '../styles/homeScreenStyles'
import Footer from '../components/Footer';
import HeaderHome from '../components/HeaderHome';

const HomeScreen = () => {
    return (
        <>

            <div className='header-img' >
                {/* <Image src={mainPhoto} /> */}
                <HeaderHome />
                <div className='main2'>
                    <div className='header-content' style={{ height: '100%', width: '100%' }}>
                        <h3>KROVINIŲ EKSPEDIJAVIMAS GELEŽINKELIO TRANSPORTU.</h3>
                        <h1 style={{ fontWeight: 'bold', color: '#516C71' }}>25 METŲ PATIRTIS.</h1>
                    </div>
                </div>
            </div>
            <section className='container-fluid pt-5 pb-5' style={{ width: '80%' }}>

                <div className='row' name="about">

                    <div className='col-sm-12  col-lg-6'>
                        <div className='container'>
                            <h2 style={{ ...sectionTitleStyle }}>Apie mus</h2>
                            <hr style={{ ...titleLineStyle }}></hr>
                            <div>
                                <div><p style={{ ...aboutTextStyle }}>UAB “Rivita ir Ko” vykdo krovinių ekspedijavimo veiklą ir teikia kitas papildomas paslaugas šioje srityje nuo 1996 metų. Ilgametė patirtis ir per du dešimtmečius užtarnautas patikimumas, leidžia bendrovei palaikyti tvarius santykius su vežėjais ir įmonėmis, teikiančiomis paslaugas, susijusias su krovinių vežimo procesu.</p>
                                </div>
                            </div>
                        </div>

                        {/* misija, vizija, tikslai */}
                        <div className='container pt-4' style={{ paddingLeft: 0 }}>
                            <div className='container'>
                                <div className="row">
                                    <div className="col-sm-2 col-md-2 col-lg-3 col-xl-2 about-us-hover">
                                        <img src={mission} alt='Vision' />
                                    </div>
                                    <div className="col-sm-12 col-md-10 col-lg-9 col-xl-10 pt-3">
                                        <h3 style={{ ...aboutParagraphsTitlesStyles }}>MISIJA:</h3>
                                        <div><p style={{ ...aboutParagraphsTextStyles }}>Kasdienėje veikloje, naudojantis ilgamete ekspedijavimo patirtimi į ir iš NVS, Baltijos ir Europos šalis, skirti išskirtinį dėmesį klientams ir atsižvelgiant į jų individualius poreikius kompetetingai formuoti bei įgyvendinti optimaliausius ekspedijavimo sprendimus.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='container'>
                                <div className="row">
                                    <div className="col-sm-2 col-md-2 col-lg-3 col-xl-2 about-us-hover">
                                        <img src={vision} alt='Vision' />
                                    </div>
                                    <div className="col-sm-12 col-md-10 col-lg-9 col-xl-10 pt-3">
                                        <h3 style={{ ...aboutParagraphsTitlesStyles }}>VIZIJA:</h3>
                                        <div><p style={{ ...aboutParagraphsTextStyles }}>Siekiame tapti lyderiaujančia įmone ekspedijuojančia krovinius į ir iš NVS, Baltijos bei Europos šalis.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='container'>
                                <div className="row">
                                    <div className="col-sm-2 col-md-2 col-lg-3 col-xl-2 about-us-hover">
                                        <img src={purpose} alt='Vision' />
                                    </div>
                                    <div className="col-sm-12 col-md-10 col-lg-9 col-xl-10 pt-3">
                                        <h3 style={{ ...aboutParagraphsTitlesStyles }}>TIKSLAI:</h3>
                                        <div><p style={{ ...aboutParagraphsTextStyles }}>Sėkmingai užmegzti ir puoselėti verslo santykius vadovaujantis įmonės vertybėmis:
                                            • Sąžiningumas ir atvirumas – rūpintis visais savo klientais, suteikti informaciją apie vežimo kainodarą ir pateikti optimaliausius krovinių gabenimo maršrutus
                                            • Bendradarbiavimo įgūdžiai – nuolat komunikuoti ir suprasti kliento poreikius, gebėti pasiūlyti alternatyvius ir lanksčius sprendimus
                                            • Atsakingumas – laiku įvykdyti patikėtus darbus, prisiimti atsakomybę už patikėtus krovinius ir jų sklandų pervežimą</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='col-sm-12 col-lg-6'>
                        <div className='container mt-3' >
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Vardas</Form.Label>
                                    <Form.Control type="text" placeholder="Įveskite vardą" />
                                    <Form.Label>E-paštas</Form.Label>
                                    <Form.Control type="text" placeholder="Įveskite paštą" />
                                    <Form.Label>Tema</Form.Label>
                                    <Form.Control type="email" placeholder="Įveskite tema" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Žinutė</Form.Label>
                                    <Form.Control as="textarea" rows={3} style={{ height: '250px' }} placeholder="Įveskite žinutę" />
                                </Form.Group>
                                <Checkbox>Sutinku su šios svetainės privatumo politika.</Checkbox>
                                <br />
                                <button className='about-us-button'>Siųsti</button>
                            </Form>


                        </div>
                    </div>
                </div>
            </section>
            <section className='container-fluid pt-5 pb-5' style={{ ...serviceSectionStyle }} name='paslaugos'>
                <div className='container' style={{ width: '80%' }}>
                    <div className='row pb-5'>
                        <h2 style={{ ...serviceTitleStyle }}>Paslaugos</h2>
                        <hr style={{ ...titleLineStyle }}></hr>
                    </div>

                    <div className='row'>
                        <div className='col-sm-12 col-md-6 col-lg-4 col-xl-3 pb-5'>
                            <div className='container text-center '>
                                <div className='container text-center service-container-style' >
                                    <i className="fas fa-train service-icons-style" ></i>
                                </div>
                                <p style={{ ...serviceText }}>Krovinių ekspedijavimas geležinkelių transportu</p>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-4 col-xl-3 pb-5'>
                            <div className='container text-center'>
                                <div className='container text-center  center service-container-style'>
                                    <i className="fas fa-globe-europe service-icons-style"></i>
                                </div>
                                <p style={{ ...serviceText }}>Krovinio judėjimo kontrolė</p>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-4 col-xl-3'>
                            <div className='container text-center'>
                                <div className='container text-center  center service-container-style'>
                                    <i className="fas fa-file-contract service-icons-style"></i>
                                </div>
                                <p style={{ ...serviceText }}>Pasienio ir transporto veterinarinės priežiūros tarnybų teikiamų paslaugų organizavimas</p>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-4 col-xl-3'>
                            <div className='container text-center'>
                                <div className='container text-center center service-container-style'>
                                    <i className="fas fa-phone service-icons-style"></i>
                                </div>
                                <p style={{ ...serviceText }}>Konsultacijos krovinių vežimo klausimais</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section className='container-fluid pt-5 pb-5' style={{ width: '80%' }} name='kroviniai'>
                <div className='row pb-5'>
                    <h2 style={{ ...sectionTitleStyle }}>Kroviniai</h2>
                    <hr style={{ ...titleLineStyle }}></hr>
                </div>
                <div className='row'>
                    <div className='col-sm-12 col-md-12 col-lg-12 col-xl-6'>
                        <div className='container' style={{ width: '100%', paddingRight: '0', paddingLeft: '0px', paddingBottom: '20px' }}>
                            <Carousel>
                                <Carousel.Item interval={3000}>
                                    <img
                                        className="d-block w-100"
                                        src={wagon1}
                                        alt="First slide"
                                        style={{ height: '360px' }}
                                    />
                                </Carousel.Item>
                                <Carousel.Item interval={3000}>
                                    <img
                                        className="d-block w-100"
                                        src={wagon3}
                                        alt="Second slide"
                                        style={{ height: '360px' }}
                                    />
                                </Carousel.Item>
                                <Carousel.Item interval={3000}>
                                    <img
                                        className="d-block w-100"
                                        src={wagon2}
                                        alt="Second slide"
                                        style={{ height: '360px' }}
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-12 col-lg-12 col-xl-6'>
                        <div className='container py-4 shadow'>
                            <div className='container'>
                                <h3 style={{ ...cargosTextStyle }}>
                                    <span>Skysti kroviniai cisterniniuose vagonuose;</span>
                                </h3>
                            </div>
                            <div className='container'>
                                <h3 style={{ ...cargosTextStyle }}>
                                    <span>Birūs  ir masiniai kroviniai universaliuose ir specializuotuosiuose vagonuose;</span>
                                </h3>
                            </div>
                            <div className='container'>
                                <h3 style={{ ...cargosTextStyle }}>
                                    <span>Kroviniai konteineriuose.</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='container-fluid text-center kroviniai'>
                <div className='row' style={{ height: '410px', position: 'relative' }}>
                    <div className='container' style={{
                        position: 'absolute', left: '50%', top: '50%',
                        transform: 'translate(-50%, -50%)'
                    }}>
                        <h3 style={{ ...cargoPhotoTitle }}><strong>REIKIA PERVEŽTI KROVINĮ?</strong></h3>
                        <p style={{ ...cargoPhotoText }}>SUSISIEKITE SU MUMIS</p>
                        <Button variant="outline-light">UŽPILDYKITE UŽKLAUSOS FORMĄ</Button>
                    </div>
                </div>

            </section>

            <section className='container-fluid' style={{ width: '80%' }}>
                <div className='row pb-5 pt-5'>
                    <h2 style={{ ...sectionTitleStyle }}>Partneriai</h2>
                    <hr style={{ ...titleLineStyle }}></hr>
                </div>
                <div className='container'>
                    <div className='row text-center'>
                        <div className='col-sm-12 col-md-6 col-lg-4 col-xl-3'>
                            <div className="container  partners-hover">
                                <div className='container ' style={{ height: '195px', width: '204px', marginTop: '20px', paddingTop: '75px', paddingBottom: '75px' }} >
                                    <Image style={{ width: '100%', height: '100%' }} src={gelezinkeliai} alt="Lietuvos geležinkeliai" />
                                </div>

                            </div>
                            <h3 style={{ ...partnersTitlesStyle }}>AB „Lietuvos geležinkeliai“</h3>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-4 col-xl-3'>
                            <div className="container partners-hover">
                                <div className='container' style={{ height: '195px', width: '204px', marginTop: '20px', paddingTop: '60px', paddingBottom: '60px' }}>
                                    <Image style={{ width: '100%', height: '100%' }} src={ldzcargo} alt="LDZ CARGO" />
                                </div>
                            </div>
                            <h3 style={{ ...partnersTitlesStyle }}>SIA „LDZ CARGO“</h3>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-4 col-xl-3'>
                            <div className="container partners-hover">
                                <div className='container' style={{ height: '195px', width: '204px', marginTop: '20px', padding: '0', paddingTop: '40px', paddingBottom: '40px' }}>
                                    <Image style={{ width: '100%', height: '100%' }} src={logo_bzhd} alt="Baltarusijos geležinkeliai" />
                                </div>
                            </div>
                            <h3 style={{ ...partnersTitlesStyle }}>VĮ „Baltarusijos geležinkeliai“</h3>
                        </div>

                        <div className='col-sm-12 col-md-6 col-lg-4 col-xl-3'>

                            <div className="container partners-hover">
                                <div className='container' style={{ height: '195px', marginTop: '20px', width: '204px', padding: '40px' }}>
                                    <Image style={{ width: '100%', height: '100%' }} src={simvolika} alt="Baltarusijos pasienio ir transporto Valstybinės veterinarinės priežiūros valdyba" />
                                </div>
                            </div>
                            <h3 style={{ ...partnersTitlesStyle }}>VĮ „Baltarusijos pasienio ir transporto Valstybinės veterinarinės priežiūros valdyba“</h3>
                        </div>

                    </div>
                </div>
            </section>
            <section className='container-fluid' style={{ width: '80%', paddingTop: '20px' }} name='kontaktai'>
                <div className='row pb-5 pt-5'>
                    <h2 style={{ ...sectionTitleStyle }}>Kontaktinė informacija</h2>
                    <hr style={{ ...titleLineStyle }}></hr>
                </div>
                <div className='row'>
                    <div className='col-sm-12 col-md-6 py-4'>
                        <div className='container contacts-hover'>
                            <div className='row'>
                                <div className='col-sm-12 col-md-2 '>
                                    <i className="fas fa-map-pin contacts-info-icons-style"></i>
                                </div>
                                <div className='col-sm-12 col-md-10'>
                                    <h3 style={{ ...contactsInfoTitle }}>ADRESAS</h3>
                                    <p style={{ ...contactsInfoText }}>Švitrigailos g.11A, LT-03228 Vilnius</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-6 py-4'>
                        <div className='container contacts-hover'>
                            <div className='row'>
                                <div className='col-sm-12 col-md-3 col-lg-2'>
                                    <i className="fas fa-phone contacts-info-icons-style"></i>
                                </div>
                                <div className='col-sm-12 col-md-9 col-lg-10'>
                                    <h3 style={{ ...contactsInfoTitle }}>TELEFONAS UŽKLAUSOMS:</h3>
                                    <p style={{ ...contactsInfoText }}>+370 265 0264</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-6 py-4'>
                        <div className='container contacts-hover'>
                            <div className='row'>
                                <div className='col-sm-12 col-md-2'>
                                    <i className="fas fa-info contacts-info-icons-style"></i>
                                </div>
                                <div className='col-sm-12 col-md-10'>
                                    <h3 style={{ ...contactsInfoTitle }}>INFORMACIJA:</h3>
                                    <p style={{ ...contactsInfoText }}>ĮMONĖS KODAS: 123646771</p>
                                    <p style={{ ...contactsInfoText }}>PVM KODAS: LT236467716</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-6 py-4'>
                        <div className='container contacts-hover'>
                            <div className='row'>
                                <div className='col-sm-12 col-md-3 col-lg-2'>
                                    <i className="fas fa-envelope-open-text contacts-info-icons-style"></i>
                                </div>
                                <div className='col-sm-12 col-md-9 col-lg-10'>
                                    <h3 style={{ ...contactsInfoTitle }}>EL. PAŠTAS:</h3>
                                    <p style={{ ...contactsInfoText }}>info@rivita.lt</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section className='container-fluid' style={{ width: '95%', paddingTop: '20px', paddingBottom: '40px' }}>
                <div className='container'>
                    <iframe title="Rivita lokacija" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2306.9415054990154!2d25.264413215888933!3d54.675457880279055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd946df73d5a7f%3A0xbd6c8ddff23db111!2s%C5%A0vitrigailos%20g.%2011%2C%20Vilnius%2003223!5e0!3m2!1slt!2slt!4v1637341318123!5m2!1slt!2slt" width="100%" height="400px" allowFullScreen="" loading="lazy"></iframe>
                </div>
            </section>

            <Footer />

        </>

    )
}

export default HomeScreen;