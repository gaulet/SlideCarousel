import React from 'react';
import PropTypes from 'prop-types';
import './index.css'

function InfoUser({name, contrat, profession}) {

    return (
        <div className="mainFlexBox contColumn" style={{paddingTop: "20px"}}>
            <div>Colocation 4 pers.</div>
            <div className="mainFlexBox contColumn" style={{marginTop: "-10px"}}>
                <div className="mainFlexBox">
                    <img src="/user3.png" alt="ixi" className="userPicture"/>
                    <div>
                        <div className="fontSLow" style={{paddingTop: "0px", marginTop: '0px'}}>{name}</div>
                        <div className="fontBlueBorder" style={{paddingTop: "0px", marginTop: '0px'}}>{contrat}</div>
                    </div>
                </div>
                <div className="mainFlexBox" style={{paddingTop: "15px"}}>
                    <img src="/user3.png" alt="ixi" className="userPicture"/>
                    <div>
                        <div className="fontSLow" style={{paddingTop: "0px", marginTop: '0px'}}>{name}</div>
                        <div className="fontBlueBorder" style={{paddingTop: "0px", marginTop: '0px'}}>{profession}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

InfoUser.propTypes = {
    name: PropTypes.string.isRequired,
    contrat: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired,
};

function InfoPay({garants, candidat}) {
    return (
        <div className="mainFlexBox contColumn">
            <div>Revenu mensuel moyen</div>
            <div className="contTypo">
                <div>
                    <p className="fontSLow" style={{paddingTop: "0px", marginTop: '-8px'}}>Candidats</p>
                    <p className="fontBlue" style={{paddingTop: "0px", marginTop: '-8px'}}>{candidat}</p>
                </div>
                <div>
                    <p className="fontSLow" style={{paddingTop: "0px", marginTop: '-8px'}}>Garants</p>
                    <p className="fontBlue" style={{paddingTop: "0px", marginTop: '-8px'}}>{garants}</p>
                </div>
            </div>
            <div className="mainFlexBox contColumn" style={{paddingTop: "0px", marginTop: '-13px'}}>
                <button className="btn"><p>Voir plus</p></button>
            </div>
        </div>
    )
}

InfoPay.propTypes = {
    candidat: PropTypes.string.isRequired,
    garants: PropTypes.string.isRequired,
};

function Card({nb, date, ...props}) {
    return (
        <div className="item" style={{width: `${(100 /(nb))-5}%`}}>
            <div className="mainFlexBox contColumn">
                <div className="item1"><InfoUser {...props} /></div>
                <div className="item2"><InfoPay {...props}/></div>
                <div className="item3 typo"> {date}</div>
            </div>
        </div>
    )
}

Card.propTypes = {
    name: PropTypes.string.isRequired,
    contrat: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired,
    candidat: PropTypes.string.isRequired,
    garants: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
};

export default Card