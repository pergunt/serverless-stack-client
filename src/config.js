const dev = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "dev-notes-infra-s3-uploads4f6eb0fd-1aszolfe7jlpe"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://api.deliostechnology.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_HCLfJ04qJ",
    APP_CLIENT_ID: "5f6jubb8dgnqurtqdnjke7bqrk",
    IDENTITY_POOL_ID: "us-east-1:11014fa1-bc7b-4f3c-83e8-49135eb3818e"
  }
};

const prod = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "prod-notes-infra-s3-uploads4f6eb0fd-sdrfm1g271v9"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://api.deliostechnology.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_fJXIahPNI",
    APP_CLIENT_ID: "2rv31c8b44de1jqp3o4pohh1jl",
    IDENTITY_POOL_ID: "us-east-1:b20c6214-f550-4b99-ae5a-179f4f02a267"
  }
};

const config = {
  // Add common config values here
  STRIPE_KEY: "pk_test_51IZgu9AdMpHfe678T4UhCLCqBpzWRDAmaXSzfLyEk6VrXQla6Wsj40U1dApyh0YSQ2ezdyAaBoZsVNWsTroijU6G00AlP36XAG",
  MAX_ATTACHMENT_SIZE: 5000000,
  // Default to dev if not set
  ...(process.env.REACT_APP_STAGE === "prod" ? prod : dev),
};

export default config