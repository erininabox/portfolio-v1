import React, { useState } from 'react';
import AwardsService from '../services/AwardsService';

function AwardsInput() {

  const initialAwardState = {
    awardName: "",
    awardingOrg: "",
    description: "",
    year: "",
    published: false
  }

  const [award, setAward] = useState(initialTutoralState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setAward({ ...award, [name]: value });
  }

  const saveAward = () => {
    var data = {
      awardName: award.awardName,
      awardingOrg: award.awardingOrg,
      description: award.description,
      year: award.year,
      published: false
    }
  }

  AwardsService.create(data)
    .then(() => {
      setSubmitted(true);
    })
    .catch(e => {
      console.log(e);
    })

  const newAward = () => {
    setAward(initialAwardState);
    setSubmitted(false);
  }

  return (
    <div>AwardsInput</div>

  )
}

export default AwardsInput