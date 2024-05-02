import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact';
import Policy from '../Pages/Policy/Policy';
import MainService from '../Pages/Service/MainService';
import InstrumentationEngineering from '../Pages/Service/IntrumentationEngineering'
import RigSurvey from '../Pages/Service/RigSurvey';
import LiftingEquipment from '../Pages/Service/LiftingEquipment';
import NonDestructive from '../Pages/Service/NonDestructive';

const Router = () => {

    return (
        <Routes>
            <Route exact path="/" caseSensitive={false} element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/quality-policy" element={<Policy />} />
            <Route exact path="/services" element={<MainService />} />
            <Route exact path="/service/Instrumentation-&-control-engineering" element={<InstrumentationEngineering />} />
            <Route exact path="/service/Rig-survey-&-facility-inspection" element={<RigSurvey />} />
            <Route exact path="/service/Lifting-Equipment-&-Inspection-Services" element={<LiftingEquipment />} />
            <Route exact path="/service/Non-destructive-testing-&-evaluation" element={<NonDestructive />} />
        </Routes>
    )
}
export default Router