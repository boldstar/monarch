<template>
    <div class="contact">
        <h3>Contact</h3>
        <form action="" class="contact-form">
            <input type="text" placeholder="Name">
            <input type="email" placeholder="Email">
            <input type="text" placeholder="Phone Number">
            <button>Submit</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'Contact'
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

    @media only screen and (max-width: 800px) {
        .contact {
            margin-bottom: 10px;
        }

        .contact-form {
            width: 100%;
        }
    }
</style>