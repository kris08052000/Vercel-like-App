import {S3} from "aws-sdk";
import fs from "fs"

const s3 = new S3({
    accessKeyId:"Your R2(cloudflare accesskeyId) or S3(AWS accesskeyId)",
    secretAccessKey:"Your R2(cloudflare secretAccessKey) or S3(AWS secretAccessKey)",
    endpoint:"Your R2(cloudflare endpoint) or S3(AWS endpoint)"
})


export const uploadFile = async (fileName: string, localFilePath: string) => {
    const fileContent = fs.readFileSync(localFilePath);
    const response = await s3.upload({
        Body: fileContent,
        Bucket: "vercel",
        Key: fileName,
    }).promise();
}