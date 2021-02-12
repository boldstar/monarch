<template>
    <div class="contact" id="contact">
        <h3>FREE 360&deg; Tour Request</h3>
        <form 
            class="contact-form"
            name="free_360_tour"
            method="post"
            v-on:submit.prevent="handleSubmit"
            action="/success/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
        >
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
                <label>
                Don’t fill this out: <input name="bot-field" />
                </label>
            </p>
            <label for="name">Name</label>
            <input  name="name" v-model="formData.name" type="text" placeholder="Name" :class="{'error': error&&!formData.name}" @change="error = false">
            <label for="email">Email</label>
            <input  name="email" v-model="formData.email" type="email" placeholder="Email"  :class="{'error': error&&!formData.email}" @change="error = false">
            <label for="number">Phone Number</label>
            <input  name="phone" v-model="formData.phone" type="text" placeholder="Phone Number" :class="{'error': error&&!formData.phone}" @change="error = false">
            <button>Submit</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'Contact',
        data() {
            return {
                formData: {},
                success: false,
                error: false
            }
        },
        methods: {
  encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  },
  handleSubmit(e) {
    if(!this.formData.name) {
      this.error = true 
      return;
    }
    if(!this.formData.email) {
      this.error = true
      return;
    }
    if(!this.formData.phone) {
      this.error = true
      return;
    }
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: this.encode({
        'form-name': e.target.getAttribute('name'),
        ...this.formData,
      }),
    })
    .then(() => {
      this.formData = ""
      this.$router.push('/')
      this.success = true
    })
    .catch(error => alert(error))
  }
}
    }
</script>

<style scoped>
    .contact {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0 20px;
        margin-bottom: 20px;
        min-height: 500px;
    }

    .contact-form {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;
    }

    input {
        padding: 15px;
        border: 1px solid gray;
        border-radius: 5px;
        margin-bottom: 8px;
        box-sizing: border-box;
        width: 100%;
    }

    form {
        width: 100%;
        max-width: 600px;
    }

    button {
        width: 100%;
        box-sizing: border-box;
        border-radius: 5px;
        border: none;
        font-weight: bold;
        padding: 15px;
        margin-top: 10px;
        color: white;
        background: #0077ff;
    }

    label {
        margin-right: auto;
        font-size: .8em;
        margin-bottom: 4px;
    }

    .error {
        border: 2px solid red;
    }

    @media only screen and (max-width: 800px) {
        .contact {
            margin-bottom: 10px;
        }

        .contact-form {
            width: 100%;
        }
    }
</style>