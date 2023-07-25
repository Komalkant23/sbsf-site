import "../Styles/UsefulLinks.css";

const UsefulLinks = () => {
  const links = [
    {
      title: "SBSF FB group:",
      link: "https://www.facebook.com/groups/106632863541630/?ref=share&mibextid=NSMWBT",
    },
    {
      title: "FB-SBSF:",
      link: "https://www.facebook.com/SahajjyerHaath?mibextid=ZbWKwL",
    },
    {
      title: "IG-SBSF:",
      link: "https://instagram.com/sarbabharatiya_sylheti_forum?igshid=MTg0ZDhmNDA=",
    },
    {
      title: "Twitter SBSF:",
      link: "https://www.twitter.com/SylhetiForum?t=AVquOuHlLjTVdPsUnRpiUw&s=09",
    },
    {
      title: "LinkedIn SH:",
      link: "https://www.linkedin.com/company/helping-hands-foundation-sbsf",
    },
    {
      title: "Sylheti metrimonial Site:",
      link: "http://biyaashadi.com/",
    },
    {
      title: "SBSF E-magazine:",
      link: "https://drive.google.com/drive/folders/1-kF9p-DOvxu0-Hx3mblcKC5U6BBNFycU",
    },
    {
      title: "SBSF Diary:",
      link: "https://instagram.com/sbsf_diary?igshid=MTg0ZDhmNDA=",
    },
  ];

  return (
    <>
      <div className="header">
        SBSF and Sahajjyer Haath Important <i>links</i>:
      </div>
      <div className="linkContainers">
        {links.map((elem, index) => {
          return (
            <div
              className={`linkContainer linkContainer${index % 2}`}
              key={index}
            >
              <h5>{elem.title}</h5>
              <strong>
                <a href={elem.link}>{elem.link}</a>
              </strong>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default UsefulLinks;
