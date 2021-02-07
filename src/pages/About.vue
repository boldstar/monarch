<template>
  <Layout>
    <div class="about-page">
      <h1>How It Works</h1>
      <div class="about-step">
        <div class="about-step-content">
          <h2>Step 1</h2>
          <p>Scan your home with a 3d camera.</p>
        </div>
        <div class="about-step-illustration">
          <g-image src="~/images/3d_camera_photo.jpeg" class="step-image"/>
        </div>
      </div>
      <div class="about-step">
        <div class="about-step-content">
          <h2>Step 2</h2>
          <p>Build 3d model of home using the scans with software.</p>
        </div>
        <div class="about-step-illustration">
          <g-image src="~/images/home_photo_outside.jpeg" class="step-image"/>

        </div>
      </div>
      <div class="about-step">
        <div class="about-step-content">
          <h2>Step 3</h2>
          <p>Share 3d model with you for your virtual tours.</p>
        </div>
        <div class="about-step-illustration">
          <g-image src="~/images/hand_shake.jpeg" class="step-image"/>

        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'How It Works'
  }
}
</script>

<style scoped>
  .about-page {
    padding: 20px;
    box-sizing: border-box;
  }

  .step-image {
    background-size: cover;
    width: 100%;
    height: auto;
  }

  @media only screen and (min-width: 600px) {
    .about-page {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .about-step {
      display: flex;
      max-height: 400px;
      max-width: 800px;
      border-radius: 20px;
      margin-bottom: 20px;
    }

    .about-step:nth-of-type(even) {
      flex-direction: row-reverse;
      text-align: right;
    }

    .about-step-illustration{
      box-sizing: border-box;
    }

    .step-image {
      background-size: clip;
      width: 100%;
      height: auto;
    }

    p {
      padding: 20px;
    }
  }
</style>
