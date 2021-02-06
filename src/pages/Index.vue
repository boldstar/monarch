<template>
  <Layout>
    <Hero />
    <About />
    <Reviews />
  </Layout>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  metaInfo: {
    title: 'Home'
  }
}
</script>
