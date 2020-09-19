import React from 'react';
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/PostLoginHeader.js";
import Footer from "components/footers/PostLoginFooter.js";
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'
import tw from "twin.macro";

const SectionHeading = tw.h2`text-4xl sm:text-5xl font-black text-green-500 tracking-wide text-center`

const Standard = () => {
    const getUploadParams = () => {
      return { url: 'https://httpbin.org/post' }
    }
  
    const handleChangeStatus = ({ meta }, status) => {
      console.log(status, meta)
    }
  
    const handleSubmit = (files, allFiles) => {
      console.log(files.map(f => f.meta))
      allFiles.forEach(f => f.remove())
      window.location.href = "/viewreport";
    }
  
    return (
      <Dropzone
        getUploadParams={getUploadParams}
        onChangeStatus={handleChangeStatus}
        onSubmit={handleSubmit}
        styles={{ dropzone: { minHeight: 300, maxHeight: 350 } }}
      />
    )
  }
  
export default () => {

      
    
    return (
        <AnimationRevealPage>
            <Header />
            <div>
            <SectionHeading>
              Upload your file here
            </SectionHeading>
            </div>
            <div>
              <Standard />
            </div>

            <Footer />
        </AnimationRevealPage>
    );
}

/*const Standard = () => {
    const getUploadParams = () => {
      return { url: 'https://httpbin.org/post' }
    }
  
    const handleChangeStatus = ({ meta }, status) => {
      console.log(status, meta)
    }
  
    const handleSubmit = (files, allFiles) => {
      console.log(files.map(f => f.meta))
      allFiles.forEach(f => f.remove())
    }

<Standard />*/
