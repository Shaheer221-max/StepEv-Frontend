import React, { useState, useEffect } from "react";
import "./CampaignInfo.css";
import Heading from "./../Reusable/Heading";
import CampaignPoints from "./CampaignPoints";
import CampaignData from "./CampaignData";
import play from "./../../assets/Images/Campaign/play.png";
import TeamMember from "./TeamMember";
import TeamRoles from "./TeamRoles";
import pdf from "./../../assets/Images/Campaign/pdf.svg";
import { getSingleCampaign } from "../../api/axios";
import { useLocation } from "react-router-dom";

const CampaignInfo = () => {
  const stateData = useLocation();

  const [data, setData] = useState();
  const [campaignId, setCampaignId] = useState(stateData.state.campaignId);

  useEffect(() => {
    const getData = async () => {
      let response = await getSingleCampaign(campaignId);
      setData(response);
    };
    getData();
  }, []);
  return (
    <>
      <Heading title="Campaigns" />

      <CampaignPoints title="Idea" />

      <CampaignData title="Title" info={data?.startup?.businessName} />

      <CampaignData
        title="Problem Statement"
        info={data?.startup?.problemStatement}
      />

      <CampaignData
        title="Impact Statement"
        info={data?.startup?.impactStatement}
      />
      <CampaignData title="Competition" info={data?.startup?.competition} />

      <CampaignData title="Story" info={data?.startup?.story} />

      <CampaignData title="Category" info={data?.startup?.category} />

      <CampaignData title="Location" info={data?.startup?.location} />

      <CampaignData
        title="Budget Needed"
        info={"$" + data?.startup?.budget}
        type={1}
      />

      <CampaignData title="Image/Video" />

      <div className="campaignVideo">
        <img
          crossOrigin="anonymous"
          src={`https://stepdev.up.railway.app/media/getImage/${data?.startup?.promoMedia?.url}`}
          alt=""
        />
      </div>

      <CampaignPoints title="Team" />

      <div className="campaignTeam">
        {data?.startup?.members?.map((item, index) => (
          <TeamMember
            name={item?.member.name}
            position={item?.position}
            img={`https://stepdev.up.railway.app/media/getImage/${item?.member.avatar}`}
          />
        ))}
      </div>

      <CampaignPoints title="Team Roles" type="bg" />

      <div className="campaingTeamMembersRole">
        {data?.projectRoles[0]?.roles?.map((item, index) => (
          <TeamRoles
            key={index}
            role={item?.title}
            description={item?.description}
          />
        ))}
      </div>

      <CampaignPoints title="Partnership Terms" type="xl" />

      <CampaignData info={data?.startup?.partnershipTerms} />

      <CampaignPoints title="Milestone" type="md" />
      {data?.startup?.milestones?.map((item, index) => (
        <CampaignData title={item?.title} info={item?.description} />
      ))}

      {/* <CampaignData
        title="Milestone1"
        info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed metus felis"
      /> */}

      <CampaignPoints title="Pitchdeck" type="md" />
      <div className="proposalPdf">
        <img src={pdf} alt="" />
        <p>Download Pitchdeck.pdf</p>
      </div>
      <div className="campaignInfoBtns">
        <div className="infoBtn1">Decline</div>
        <div className="infoBtn2">Approve</div>
      </div>
    </>
  );
};

export default CampaignInfo;
