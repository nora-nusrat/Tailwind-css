tailwind.config = {
    theme: {
      extend: {
        //color
        colors: {
          headerBg: '#DBD5FB',
          btnColor: '#7258F7',
          h1Color: '#3D3430',
          serviceColor: '#3D3430',
          pColor: '#5F5450',
          allBg: '#FEF8E4',
          planColor: '#E2DDFB',
          plColor: '#F5F1F9',
          ycolor: '#FEF8E4',
          lColor: '#19153D',
          paraColor: '#FFFFFF',

        },
        //color
        //container
        maxWidth: {
            headerContainer: '1170px',
          },
        //container
        //font family
        fontFamily: {
            'open': ["Open Sans"],
            'papri': ["Paprika"],
          },
        //font family
        //background image
        backgroundImage: {
            bannerBg: "url('./images/Header.png')",
            serviceBg: "url('./images/Elements.png')",
            whatDoWeDoBg: "url('./images/What We Do_.png')",
            planBg: "url('./images/choosetherightplan.png')",
            worksBg: "url('./images/Selected Works.png')",
            testimonalBg: "url('./images/testimonal.png')",
            selectedBg: "url('./images/pic100.png')",
          },
        //background image
        //Font size
        fontSize: {
            64: '64px',
            56: '56px',
            30: '30px',
            18: '18px',
            24: '24px',
          }
        //Font size
      }
    }
  }