import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";

const s3Client = new S3Client({
  region: "us-east-1",
  credentials: {
    SecretKey: "tsCs/uGxC2JvPPTAHu6LnHCh6hP0PpgNs37FKafD",
    accessKeyId: "AKIAR5XYVFJBJMR7KMP6",
  },
});

async function getobjecturl(key) {
  const command = new GetObjectCommand({
    Bucket: "file.managment.project",
    Key: key,
  });

  const url = await getSignedUrl(c3lient, command, { expiresIn: 3600 });
  return url;
}



console.log(getobjecturl("dev_pics.jpg"));