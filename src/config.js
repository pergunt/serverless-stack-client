const config = {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-upload-ivan",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://wfbku4bwd9.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_tqvi4dCqO",
    APP_CLIENT_ID: "7gkglmiojvs7tkh4m41kg1irep",
    IDENTITY_POOL_ID: "us-east-1:e5e56929-ca4b-42b6-9d83-f3ac97575271",
  },
};

export default config;