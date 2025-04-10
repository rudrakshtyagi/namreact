import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdaMYtVi9_tfNcpsbGGseU6ehYgV9UeU3h7A&s"
        ></img>
      </div>

      <div className="navi">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Kuchni</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const ResturantCard = (props) => {
  const { resData } = props;

  return (
    <div className="res-card">
     <img 
  src={
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" 
    + resData.info.cloudinaryImageId
  } 
/>
<h3>{resData.info.name}</h3>
<h4>{resData.info.cuisines?.join(", ")}</h4>
<h4>{resData.info.avgRating}</h4>
<h4>{resData.info.sla.deliveryTime} minutes</h4>

    </div>
  );
};


const resList = [
  {
   
        info: {
          id: "683864",
          name: "Rollsking",
          city: "24",
          slugs: {
            restaurant: "rollsking-raja-park-raja-park",
            city: "noida",
          },
          cloudinaryImageId: "a0ca578f7d39fac9d846ddf65fdc0c5f",
          address:
            "SHOP No-LGF-05 ASSOTECH HI STREET,PLOT No-GH-06-A, CROSSING REPUBLIC, Ghaziabad, Uttar Pradesh-201016 Pin code  - 201016",
          locality: "Panchwati",
          areaName: "Raj Nagar Extension",
          costForTwo: "30000",
          costForTwoMessage: "₹300 FOR TWO",
          cuisines: ["Fast Food", "Rolls & Wraps", "North Indian", "Snacks"],
          avgRating: 4.3,
          feeDetails: {},
          avgRatingString: "4.3",
          totalRatingsString: "729",
          sla: {
            deliveryTime: 39,
            minDeliveryTime: 35,
            maxDeliveryTime: 40,
            lastMileTravel: 3,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_NONE",
            slaString: "35-40 MINS",
            lastMileTravelString: "3.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {
            imageBadges: [
              {
                imageId: "Rxawards/_CATEGORY-Rolls.png",
                description: "Delivery!",
              },
            ],
          },
          aggregatedDiscountInfoV3: {
            header: "₹125 OFF",
            subHeader: "ABOVE ₹449",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"eeee26c1-ff43-d361-55fb-dc705b659009","grid":"eaa55a26-286e-43e0-947b-8716a12713d3","queryUniqueId":"66ce763c-5dfd-224f-2178-10f46f8a7b1f","query":"Rollsking"}',
          objectValue: "683864",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            query: "Rollsking",
            sourceSessionId: "jxze3e20-5b94-4473-a3af-4e206ae1261c",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "7a74952dbd26a84a71a82e3615d87dd1",
            restaurant_id: "683864",
          },
        },
      
    
  },
  {
    info: {
      id: "347943",
      name: "Wakhra Swaad",
      city: "24",
      slugs: {
        restaurant: "wakhra-swaad-crossing-republic-crossing-republic",
      },
      cloudinaryImageId: "06614d33a0adb57e8baf7c0f736937da",
      locality: "Gaur City 2",
      areaName: "Gaur City 2",
      costForTwo: "₹500 for two",
      cuisines: ["North Indian", "Biryani", "Chinese", "Desserts"],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: "347943",
        title: "Delivery Charge",
        amount: "0",
      },
      totalRatingsString: "4.8K+",
      promoted: true,
      adTrackingId:
        "cid=27120100~p=5~adgrpid=27120100#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=347943~plpr=COLLECTION~st=rollsking~eid=3bae153a-b486-4af9-bc7c-6c37e1b73234~srvts=1744225193173~collid=56861",
      sla: {
        deliveryTime: 39,
        minDeliveryTime: 35,
        maxDeliveryTime: 40,
        serviceability: "SERVICEABLE",
        slaString: "35-40 MINS",
        lastMileTravelString: "6.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-04-10 02:25:00",
        opened: true,
      },
      badges: {},
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹199",
        logoCtx: {
          text: "BENEFITS",
        },
      },
      externalRatings: {
        aggregatedRating: {
          rating: "5.0",
          ratingCount: "8",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      campaignId: "27120100",
    },
    analytics: {},
    cta: {},
  },
  {
    info: {
      id: "747672",
      name: "Fogon",
      city: "24",
      slugs: {
        restaurant: "fogon-crossing-republic-crossing-republic",
      },
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/4/58ed4fbd-fcaf-4166-a4c5-c948f4ce7251_747672.jpg",
      locality: "Ithaira",
      areaName: "Crossing Republic",
      costForTwo: "₹300 for two",
      cuisines: [
        "North Indian",
        "Chinese",
        "Mughlai",
        "Momos",
        "Thai",
        "Fast Food",
        "Tandoori",
        "Snacks",
      ],
      avgRating: 4.4,
      feeDetails: {
        restaurantId: "747672",
        title: "Delivery Charge",
        amount: "0",
      },
      totalRatingsString: "374",
      sla: {
        deliveryTime: 39,
        minDeliveryTime: 35,
        maxDeliveryTime: 40,
        serviceability: "SERVICEABLE",
        slaString: "35-40 MINS",
        lastMileTravelString: "8.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-04-10 03:00:00",
        opened: true,
      },
      badges: {},
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹299",
        discountTag: "FLAT DEAL",
        logoCtx: {
          text: "BENEFITS",
        },
      },
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {},
  },
  {
    info: {
      id: "808933",
      name: "Nacho Daddy",
      city: "24",
      slugs: {
        restaurant: "nacho-daddy-raj-nagar-raj-nagar",
      },
      cloudinaryImageId: "56c20cff0d4859b758f332e9e93706e4",
      locality: "Gagan Enclave",
      areaName: "Amrit Nagar",
      costForTwo: "₹250 for two",
      cuisines: [
        "Punjabi",
        "Thalis",
        "Indian",
        "Grill",
        "Kebabs",
        "Salads",
        "Street Food",
        "Snacks",
        "Pizzas",
        "Home Food",
      ],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: "808933",
        title: "Delivery Charge",
        amount: "0",
      },
      totalRatingsString: "24",
      promoted: true,
      adTrackingId:
        "cid=27206488~p=9~adgrpid=27206488#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=808933~plpr=COLLECTION~st=rollsking~eid=fc3bba2b-402a-4ccc-be41-dda901812731~srvts=1744225193173~collid=56861",
      sla: {
        deliveryTime: 50,
        minDeliveryTime: 45,
        maxDeliveryTime: 50,
        serviceability: "SERVICEABLE",
        slaString: "45-50 MINS",
        lastMileTravelString: "4.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-04-16 00:00:00",
        opened: true,
      },
      badges: {},
      aggregatedDiscountInfoV3: {
        header: "₹50 OFF",
        subHeader: "ABOVE ₹499",
        discountTag: "FLAT DEAL",
        logoCtx: {
          text: "BENEFITS",
        },
      },
      externalRatings: {
        aggregatedRating: {
          rating: "5.0",
          ratingCount: "<3",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      campaignId: "27206488",
    },
    analytics: {},
    cta: {},
  },
  {
    info: {
      id: "452873",
      name: "Appu Ke Phare",
      city: "24",
      slugs: {
        restaurant: "appu-ke-phare-greater-noida-greater-noida",
      },
      cloudinaryImageId: "dmm05zl8xdr1z0epg77e",
      locality: "Gaur City 1",
      areaName: "Sector 4",
      costForTwo: "₹400 for two",
      cuisines: ["Indian", "Snacks"],
      avgRating: 3.4,
      feeDetails: {
        restaurantId: "452873",
        title: "Delivery Charge",
        amount: "0",
      },
      totalRatingsString: "425",
      sla: {
        deliveryTime: 43,
        minDeliveryTime: 40,
        maxDeliveryTime: 45,
        serviceability: "SERVICEABLE",
        slaString: "40-45 MINS",
        lastMileTravelString: "5.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-04-10 23:59:00",
        opened: true,
      },
      badges: {},
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
        logoCtx: {
          text: "BENEFITS",
        },
      },
      externalRatings: {
        aggregatedRating: {
          rating: "3.8",
          ratingCount: "230",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {},
  },
  {
    info: {
      id: "566364",
      name: "Faasos Signature Wraps & Rolls",
      city: "24",
      slugs: {
        restaurant:
          "signature-wraps-rolls-by-faasos-crossing-republic-crossing-republic",
      },
      cloudinaryImageId: "c583ca6ce40b426797a78ae2ac91f2ec",
      locality: "Dundahera\n",
      areaName: "crossing republic",
      costForTwo: "₹350 for two",
      cuisines: [
        "Fast Food",
        "Snacks",
        "North Indian",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.3,
      feeDetails: {
        restaurantId: "566364",
        title: "Delivery Charge",
        amount: "0",
      },
      totalRatingsString: "161",
      promoted: true,
      adTrackingId:
        "cid=27588014~p=10~adgrpid=27588014#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=566364~plpr=COLLECTION~st=rollsking~eid=0c8c1283-e0b3-42d0-8263-aa905b91167a~srvts=1744225193173~collid=56861",
      sla: {
        deliveryTime: 39,
        minDeliveryTime: 35,
        maxDeliveryTime: 40,
        serviceability: "SERVICEABLE",
        slaString: "35-40 MINS",
        lastMileTravelString: "2.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-04-10 03:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Rolls.png",
            description: "Delivery!",
          },
        ],
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      campaignId: "27588014",
    },
    analytics: {},
    cta: {},
  },
  {
    info: {
      id: "265932",
      name: "Lucknow Wale Special Galawati Kabab",
      city: "24",
      slugs: {
        restaurant:
          "lucknow-wale-special-galawati-kabab-crossing-republic-crossing-republic-2",
      },
      cloudinaryImageId: "fe071c984feb2dc7017ab928bd724c38",
      locality: "Crossings Republik",
      areaName: "crossing republic",
      costForTwo: "₹280 for two",
      cuisines: ["North Indian"],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: "265932",
        title: "Delivery Charge",
        amount: "0",
      },
      totalRatingsString: "633",
      sla: {
        deliveryTime: 32,
        minDeliveryTime: 30,
        maxDeliveryTime: 35,
        serviceability: "SERVICEABLE",
        slaString: "30-35 MINS",
        lastMileTravelString: "3.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-04-10 01:00:00",
        opened: true,
      },
      badges: {},
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        discountTag: "FLAT DEAL",
      },
      externalRatings: {
        aggregatedRating: {
          rating: "2.7",
          ratingCount: "18",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {},
  },
  {
    info: {
      id: "747663",
      name: "Urban Tadka",
      city: "24",
      slugs: {
        restaurant: "urban-tadka-crossing-republic-crossing-republic-2",
      },
      cloudinaryImageId: "87d7877e4ca8634bcf01b01ca4445061",
      locality: "Dunduhaida",
      areaName: "Crossing Republic",
      costForTwo: "₹300 for two",
      cuisines: ["Fast Food", "Pastas"],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: "747663",
        title: "Delivery Charge",
        amount: "0",
      },
      totalRatingsString: "18",
      promoted: true,
      adTrackingId:
        "cid=27243106~p=11~adgrpid=27243106#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=747663~plpr=COLLECTION~st=rollsking~eid=ed44ac77-5735-47f6-a17a-94f115ea4a9b~srvts=1744225193173~collid=56861",
      sla: {
        deliveryTime: 36,
        minDeliveryTime: 35,
        maxDeliveryTime: 40,
        serviceability: "SERVICEABLE",
        slaString: "35-40 MINS",
        lastMileTravelString: "2.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-04-10 02:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
        logoCtx: {
          text: "BENEFITS",
        },
      },
      externalRatings: {
        aggregatedRating: {
          rating: "3.5",
          ratingCount: "6",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      campaignId: "27243106",
    },
    analytics: {},
    cta: {},
  },
  {
    info: {
      id: "73259",
      name: "Kake Da Hotel",
      city: "24",
      slugs: {
        restaurant: "kake-da-hotel-raj-nagar-extension-raj-nagar",
      },
      cloudinaryImageId: "wssb5txnezo3klywzlhs",
      locality: "Noor Nagar",
      areaName: "Raj Nagar",
      costForTwo: "₹300 for two",
      cuisines: ["Chinese", "Tandoor"],
      avgRating: 4.3,
      feeDetails: {
        restaurantId: "73259",
        title: "Delivery Charge",
        amount: "0",
      },
      totalRatingsString: "6.7K+",
      sla: {
        deliveryTime: 39,
        minDeliveryTime: 35,
        maxDeliveryTime: 40,
        serviceability: "SERVICEABLE",
        slaString: "35-40 MINS",
        lastMileTravelString: "11.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-04-10 02:00:00",
        opened: true,
      },
      badges: {},
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹499",
        discountTag: "FLAT DEAL",
        logoCtx: {
          text: "BENEFITS",
        },
      },
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {},
  },
  {
    info: {
      id: "63090",
      name: "Kilo Curry",
      city: "24",
      slugs: {
        restaurant: "kilo-curry-crossing-republic-crossing-republik",
      },
      cloudinaryImageId: "h7reeamscnwoe026pirv",
      locality: "Ajnara Arcade",
      areaName: "crossing republic",
      costForTwo: "₹250 for two",
      cuisines: [
        "North Indian",
        "Chinese",
        "Italian",
        "Mexican",
        "Snacks",
        "Mughlai",
      ],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: "63090",
        title: "Delivery Charge",
        amount: "0",
      },
      totalRatingsString: "15K+",
      promoted: true,
      adTrackingId:
        "cid=27282062~p=13~adgrpid=27282062#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=63090~plpr=COLLECTION~st=rollsking~eid=f46e8418-ad1c-4eb9-9567-5b6aa0a8659c~srvts=1744225193173~collid=56861",
      sla: {
        deliveryTime: 30,
        minDeliveryTime: 30,
        maxDeliveryTime: 35,
        serviceability: "SERVICEABLE",
        slaString: "30-35 MINS",
        lastMileTravelString: "2.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-04-16 00:00:00",
        opened: true,
      },
      badges: {},
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      campaignId: "27282062",
    },
    analytics: {},
    cta: {},
  },
  {
    info: {
      id: "58639",
      name: "Lucknow Wale Kababi - Since 2009",
      city: "10459",
      slugs: {
        restaurant: "lucknow-wale-kababi-indirapuram-indirapuram",
      },
      cloudinaryImageId: "p6ov4iwnvihiznyjbjyz",
      locality: "Indirapuram",
      areaName: "Indirapuram",
      costForTwo: "₹500 for two",
      cuisines: ["Kebabs", "Biryani", "Mughlai", "North Indian"],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: "58639",
        title: "Delivery Charge",
        amount: "0",
      },
      totalRatingsString: "2.9K+",
      sla: {
        deliveryTime: 40,
        minDeliveryTime: 40,
        maxDeliveryTime: 45,
        serviceability: "SERVICEABLE",
        slaString: "40-45 MINS",
        lastMileTravelString: "9.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-04-10 05:29:00",
        opened: true,
      },
      aggregatedDiscountInfo: {},
      badges: {},
      aggregatedDiscountInfoV2: {},
      externalRatings: {
        aggregatedRating: {
          rating: "3.5",
          ratingCount: "64",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {},
  },
  {
    info: {
      id: "723181",
      name: "Zaika",
      city: "24",
      slugs: {
        restaurant: "zaika-raj-nagar-raj-nagar-3",
      },
      cloudinaryImageId: "14ff045077fd04ebbadb86b57b349e77",
      locality: "Sector 7",
      areaName: "Raj Nagar",
      costForTwo: "₹250 for two",
      cuisines: ["Chinese", "Snacks"],
      avgRating: 3.6,
      feeDetails: {
        restaurantId: "723181",
        title: "Delivery Charge",
        amount: "0",
      },
      totalRatingsString: "885",
      promoted: true,
      adTrackingId:
        "cid=27120763~p=14~adgrpid=27120763#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=723181~plpr=COLLECTION~st=rollsking~eid=4062104f-02a6-4cba-8a75-03bde8e11f50~srvts=1744225193173~collid=56861",
      sla: {
        deliveryTime: 44,
        minDeliveryTime: 40,
        maxDeliveryTime: 45,
        serviceability: "SERVICEABLE",
        slaString: "40-45 MINS",
        lastMileTravelString: "8.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-04-10 03:00:00",
        opened: true,
      },
      aggregatedDiscountInfo: {},
      badges: {},
      aggregatedDiscountInfoV2: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      campaignId: "27120763",
    },
    analytics: {},
    cta: {},
  },
  {
    info: {
      id: "371106",
      name: "Veer Ji Malai Chaap Wale",
      city: "24",
      slugs: {
        restaurant: "veer-ji-malai-chaap-crossing-republic-crossing-republic",
      },
      cloudinaryImageId: "aukg0jbxki3wbqcdxo9g",
      locality: "Gaur City 2",
      areaName: "Gaur City 2",
      costForTwo: "₹450 for two",
      cuisines: ["Indian", "Chinese"],
      avgRating: 3.9,
      feeDetails: {
        restaurantId: "371106",
        title: "Delivery Charge",
        amount: "0",
      },
      totalRatingsString: "1.2K+",
      sla: {
        deliveryTime: 41,
        minDeliveryTime: 40,
        maxDeliveryTime: 45,
        serviceability: "SERVICEABLE",
        slaString: "40-45 MINS",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-04-10 01:45:00",
        opened: true,
      },
      badges: {},
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹149",
        logoCtx: {
          text: "BENEFITS",
        },
      },
      externalRatings: {
        aggregatedRating: {
          rating: "2.7",
          ratingCount: "143",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {},
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="res-container">
        <ResturantCard resData={resList[1]} />
   
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
