import express from "express";
import {S3} from "aws-sdk";

const s3 = new S3({
    accessKeyId:"Your R2(cloudflare accesskeyId) or S3(AWS accesskeyId)",
    secretAccessKey:"Your R2(cloudflare secretAccessKey) or S3(AWS secretAccessKey)",
    endpoint:"Your R2(cloudflare endpoint) or S3(AWS endpoint)"
})

const app = express();

app.get("/*", async (req, res) => {
    // id.100xdevs.com
    const host = req.hostname;

    const id = host.split(".")[0];
    const filePath = req.path;

    const contents = await s3.getObject({
        Bucket: "vercel",
        Key: `dist/${id}${filePath}`
    }).promise();
    
    const type = filePath.endsWith("html") ? "text/html" : filePath.endsWith("css") ? "text/css" : "application/javascript"
    res.set("Content-Type", type);

    res.send(contents.Body);
})

app.listen(3001);