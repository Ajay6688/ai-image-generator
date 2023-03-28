import axios from "axios";
// const data = {
//   model: "image-alpha-001",
//   prompt: "a cat sitting on a laptop",
//   num_images: 1,
//   size: "1024x1024",
//   response_format: "url",
// };

interface OpenAIImageData {
  prompt: string;
  num_images: number;
  size: string;
}

// const callGenerateImageApi = async (data: OpenAIImageData) => {
//   const config = {
//     method: "post",
//     url: "https://api.openai.com/v1/images/generations",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization:
//         `Bearer ${process.env.REACT_APP_DALLE_Open_AI_Key}`,
//     },
//     data: data,
//   };
//   try {
//     console.log("hii")
//     const response: any = await axios(config);
//     console.log(response);
//     return response;
//   } catch (error) {
//     console.log(error);
//     return error;
//   }
// };

export const callGenerateImageApi = async (data :OpenAIImageData) => {
  console.log(data)
  await new Promise(resolve => setTimeout(resolve, 3000));
  return {
    data : {
      data : [
        {
          url: "https://oaidalleapiprodscus.blob.core.windows.net/private/org-tpLFNw3hWHuyWFX2nF0FuD7d/user-c7nBjVprBZd14en5uQ2Njo7u/img-FUKKKymykWaL2LbC9UQVHaig.png?st=2023-03-27T10%3A07%3A08Z&se=2023-03-27T12%3A07%3A08Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-03-26T20%3A39%3A22Z&ske=2023-03-27T20%3A39%3A22Z&sks=b&skv=2021-08-06&sig=EwTLdNGczZSuxCt72Z93C/RJCrKxnTqdZXK77nFKhd8%3D",
        },
        {
          url: "https://oaidalleapiprodscus.blob.core.windows.net/private/org-tpLFNw3hWHuyWFX2nF0FuD7d/user-c7nBjVprBZd14en5uQ2Njo7u/img-BRYdNCJuI6ybKK0qtvcYaefX.png?st=2023-03-27T10%3A07%3A08Z&se=2023-03-27T12%3A07%3A08Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-03-26T20%3A39%3A22Z&ske=2023-03-27T20%3A39%3A22Z&sks=b&skv=2021-08-06&sig=jGE/o3%2B6tARz%2B1gYui4cmtjDMaXqfKCDPEz65gmiQ3g%3D",
        },
        {
          url: "https://oaidalleapiprodscus.blob.core.windows.net/private/org-tpLFNw3hWHuyWFX2nF0FuD7d/user-c7nBjVprBZd14en5uQ2Njo7u/img-ThDR1kUsjJkUz0OGMZzRzxd1.png?st=2023-03-27T10%3A07%3A08Z&se=2023-03-27T12%3A07%3A08Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-03-26T20%3A39%3A22Z&ske=2023-03-27T20%3A39%3A22Z&sks=b&skv=2021-08-06&sig=Nv3awtfDJq6TtXM%2BrxOyDlkgrQ3vgTZo7QfcAAv7IVo%3D",
        },
        {
          url : "https://oaidalleapiprodscus.blob.core.windows.net/private/org-tpLFNw3hWHuyWFX2nF0FuD7d/user-c7nBjVprBZd14en5uQ2Njo7u/img-x4jyEhHYl1lpiSBq2F8qcd8I.png?st=2023-03-27T10%3A07%3A09Z&se=2023-03-27T12%3A07%3A09Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-03-26T20%3A39%3A22Z&ske=2023-03-27T20%3A39%3A22Z&sks=b&skv=2021-08-06&sig=5HPtDUZsqPwNS7SNUABYu9DP5P1qwmgyz%2BH56BjIMpI%3D"
        }
      ]
    }
  } 
};

export default callGenerateImageApi;
