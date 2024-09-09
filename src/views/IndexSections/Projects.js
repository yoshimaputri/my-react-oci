/*!
=========================================================
* Updated by Yoshima Putri
=========================================================
*/
import React from "react";
import { Container, Row } from "reactstrap";
import {ReactPhotoCollage} from "react-photo-collage";
import {EmbedPDF} from "@simplepdf/react-embed-pdf"
import truckEcommercePDF from 'assets/img/portfolio/webdev/React.js/Truck_E-commerce_Website.pdf';

export default function Projects() {
    const adobexd = {
        width: '1800px',
    height: ['330px', '170px'],
    layout: [6],
    photos: [
            { source: require("assets/img/portfolio/ui_ux/AdobeXD/Home.png") },
            { source: require("assets/img/portfolio/ui_ux/AdobeXD/Login.png") },
            { source: require("assets/img/portfolio/ui_ux/AdobeXD/chatting-feature-with-pick-up-person.png") },
            { source: require("assets/img/portfolio/ui_ux/AdobeXD/trash-confirmation.png") },
            { source: require("assets/img/portfolio/ui_ux/AdobeXD/upload-the-trash-photo.png") },
            { source: require("assets/img/portfolio/ui_ux/AdobeXD/profile.png") },
            { source: require("assets/img/portfolio/ui_ux/AdobeXD/choose-schedule-to-pick-up-the-trash.png") },
            { source: require("assets/img/portfolio/ui_ux/AdobeXD/home-after-submit-the-trash-pick-up.png") },
            { source: require("assets/img/portfolio/ui_ux/AdobeXD/information_style-board.png") },
            { source: require("assets/img/portfolio/ui_ux/AdobeXD/input-home-address-to-pick-up.png") },
            { source: require("assets/img/portfolio/ui_ux/AdobeXD/input-trash-information.png") },
            { source: require("assets/img/portfolio/ui_ux/AdobeXD/open-page.png") },
            { source: require("assets/img/portfolio/ui_ux/AdobeXD/points.png") },
            { source: require("assets/img/portfolio/ui_ux/AdobeXD/registration.png") },
            { source: require("assets/img/portfolio/ui_ux/AdobeXD/reward.png") },
            { source: require("assets/img/portfolio/ui_ux/AdobeXD/tracking-the-pick-up-person.png") },
            { source: require("assets/img/portfolio/ui_ux/AdobeXD/waiting-notification.png") },
        ],
        showNumOfRemainingPhotos: true
    };
    const coreldraw = {
        width: '1800px',
    height: ['213px', '170px'],
    layout: [4],
    photos: [
            { source: require("assets/img/portfolio/ui_ux/CorelDRAW/index_aboutus.jpg") },
            { source: require("assets/img/portfolio/ui_ux/CorelDRAW/infodetail.jpg") },
            { source: require("assets/img/portfolio/ui_ux/CorelDRAW/postevent.jpg") },
            { source: require("assets/img/portfolio/ui_ux/CorelDRAW/eventlist.jpg") },
            { source: require("assets/img/portfolio/ui_ux/CorelDRAW/Login.jpg") },
            { source: require("assets/img/portfolio/ui_ux/CorelDRAW/register.jpg") },
            { source: require("assets/img/portfolio/ui_ux/CorelDRAW/profile.jpg") },
        ],
        showNumOfRemainingPhotos: true
    };
    const simpikti = {
        width: '1800px',
    height: ['170px', '170px'],
    layout: [5],
    photos: [
            { source: require("assets/img/portfolio/webdev/Laravel/SIMPIKTI/schedule-list.jpg") },
            { source: require("assets/img/portfolio/webdev/Laravel/SIMPIKTI/adding-the-schedule-2.png") },
            { source: require("assets/img/portfolio/webdev/Laravel/SIMPIKTI/detail-schedule-in-diploma.png") },
            { source: require("assets/img/portfolio/webdev/Laravel/SIMPIKTI/detail-payment.png") },
            { source: require("assets/img/portfolio/webdev/Laravel/SIMPIKTI/detail-evaluation.png") },
            { source: require("assets/img/portfolio/webdev/Laravel/SIMPIKTI/attendance-download.png") },
            { source: require("assets/img/portfolio/webdev/Laravel/SIMPIKTI/course.png") },
            { source: require("assets/img/portfolio/webdev/Laravel/SIMPIKTI/detail-admission.png") },
            { source: require("assets/img/portfolio/webdev/Laravel/SIMPIKTI/detail-registrant.png") },
            { source: require("assets/img/portfolio/webdev/Laravel/SIMPIKTI/adding-the-schedule-1.png") },
            { source: require("assets/img/portfolio/webdev/Laravel/SIMPIKTI/evaluation-list.png") },
            { source: require("assets/img/portfolio/webdev/Laravel/SIMPIKTI/download-evaluation-report.png") },
            { source: require("assets/img/portfolio/webdev/Laravel/SIMPIKTI/final-assignment-assessment-management.png") },
            { source: require("assets/img/portfolio/webdev/Laravel/SIMPIKTI/graduation-receipt.png") },
            { source: require("assets/img/portfolio/webdev/Laravel/SIMPIKTI/installment-payment.png") },
            { source: require("assets/img/portfolio/webdev/Laravel/SIMPIKTI/practical-work-grade.png") },
            { source: require("assets/img/portfolio/webdev/Laravel/SIMPIKTI/transcript-management.png") },
        ],
        showNumOfRemainingPhotos: true
    };
    return (
        <div className="section section-project" id="project-section">
            <Container>
                <div className="title">
                    <h3 className="mb-3">Projects</h3>
                </div>
                <Row className="project-row collage-row">
                    <h4 className="btn-primary">Prototype: UI/UX Mobile App using Adobe XD</h4>
                    <h5>This is a prototype application for managing recyclable waste in Indonesia.</h5>
                    <ReactPhotoCollage {...adobexd} />
                </Row>
                <Row className="project-row collage-row">
                    <h4 className="btn-info">Prototype: UI/UX Web App using CorelDRAW</h4>
                    <h5>This is a simple prototype for booth reservation at events.</h5>
                    <ReactPhotoCollage {...coreldraw} />
                </Row>
                <Row className="project-row collage-row">
                    <h4 className="btn-warning">Web Development: SIMPIKTI Academic System using Laravel</h4>
                    <h5 className="h5-paragraph">This web application is a tool for lecturers and administrators to manage admissions, schedules, students, attendance, performance evaluations, and teaching statistics (simpikti.its.ac.id). While it offers many features, some cannot be showcased due to interface limitations, and certain images may have low resolution.</h5>
                    <ReactPhotoCollage {...simpikti} />
                </Row>
                <Row className="project-row collage-row">
                    <h4 className="btn-danger">Web Development: Truck E-commerce Platform using ReactJS</h4>
                    <h5 className="h5-paragraph">This web application is an e-commerce platform for buying and selling trucks in South Korea. The design requirement was to make it similar to <a target="_blank" rel="noopener noreferrer" href="http://www.encar.com/index.do">encar.com</a> , and it includes many features, including advanced administrative functionality.</h5>
                    <EmbedPDF mode="inline" style={{ width: 1200, height: 500 }} documentURL={truckEcommercePDF} />
                </Row>
            </Container>
        </div>
    );
}