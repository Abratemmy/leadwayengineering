import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact';
import Policy from '../Pages/Policy/Policy';
import MainService from '../Pages/Service/MainService';
import RigSurvey from '../Pages/Service/RigSurvey';
import LiftingEquipment from '../Pages/Service/LiftingEquipment';
import NonDestructive from '../Pages/Service/NonDestructive';
import OperationMaintenance from '../Pages/Service/OperationMaintenance';
import Integritytest from '../Pages/Service/Integritytest';
import Metering from '../Pages/Service/Metering';
import WeldingFabrication from '../Pages/Service/WeldingFabrication';
import Instrumentationcalibfration from '../Pages/Service/Instrumentationcalibfration';
import Manpower from '../Pages/Service/Manpower';
import Equipmentleasing from '../Pages/Service/Equipmentleasing';
import Training from '../Pages/Service/Training';
import TorgueOperation from '../Pages/Service/TorgueOperation';
import QualityPolicy from '../Pages/Policy/QualityPolicy';
import DrugAlcoholPolicy from '../Pages/Policy/DrugAlcoholPolicy';
import EnvironmentalPolicy from '../Pages/Policy/EnvironmentalPolicy';
import WasteManagement from '../Pages/Policy/WasteManagement';
import OccupationalPolicy from '../Pages/Policy/OccupationalPolicy';
import RecruitmentPolicy from '../Pages/Policy/RecruitmentPolicy';
import LocalContentPolicy from '../Pages/Policy/LocalContentPolicy';
import AntiBeberyPolicy from '../Pages/Policy/AntiBeberyPolicy';

const Router = () => {

    return (
        <Routes>
            <Route exact path="/" caseSensitive={false} element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/quality-policy" element={<Policy />} />
            <Route exact path="/quality_policy_statement" element={<QualityPolicy />} />
            <Route exact path="/drug_alcohol_policy" element={<DrugAlcoholPolicy />} />
            <Route exact path="/environmental_policy" element={<EnvironmentalPolicy />} />
            <Route exact path="/waste_management_policy" element={<WasteManagement />} />
            <Route exact path="/occupational_policy" element={<OccupationalPolicy />} />
            <Route exact path="/recruitment_policy" element={<RecruitmentPolicy />} />
            <Route exact path='/local_content_policy' element={<LocalContentPolicy />} />
            <Route exact path="/anti_bribery_policy" element={<AntiBeberyPolicy />} />



            {/* services */}
            <Route exact path="/services" element={<MainService />} />
            <Route exact path="/services/Rig-survey/facility-inspection" element={<RigSurvey />} />
            <Route exact path="/services/Lifting-Inspection" element={<LiftingEquipment />} />
            <Route exact path="/services/Non-destructive-testing-&-evaluation" element={<NonDestructive />} />
            <Route exact path="/services/operation-&-maintenance-support" element={<OperationMaintenance />} />
            <Route exact path="/services/Integrity-test/certifications" element={<Integritytest />} />
            <Route exact path="/services/Metering" element={<Metering />} />
            <Route exact path="/services/Welding-&-fabrication" element={<WeldingFabrication />} />
            <Route exact path="/services/Instrumentation-&-calibration" element={<Instrumentationcalibfration />} />
            <Route exact path="/services/Manpower-outsourcing" element={<Manpower />} />
            <Route exact path="/services/Equipment-leasing" element={<Equipmentleasing />} />
            <Route exact path="/services/Training" element={<Training />} />
            <Route exact path="/services/Torgue-operation" element={<TorgueOperation />} />
        </Routes>
    )
}
export default Router