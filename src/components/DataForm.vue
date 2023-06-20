<template>
  <div class="form-container">
    <h1>Registration Form</h1>
    <form action="" @submit.prevent="submitForm">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="formData.name" required />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="formData.email" required />
      </div>

      <div>
        <label for="country">Country:</label>
        <select id="country" v-model="formData.country" required>
          <option value="">Select a country</option>
          <option value="USA">India</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          <option value="UK">UK</option>
          <option value="Australia">Australia</option>
        </select>
      </div>
      <div>
        <label>Gender:</label>
        <input
          type="radio"
          id="male"
          value="Male"
          v-model="formData.gender"
          required />
        <label for="male">Male</label>

        <input
          type="radio"
          id="female"
          value="Female"
          v-model="formData.gender" />
        <label for="female">Female</label>
      </div>

      <div>
        <label>Hobbies:</label>
        <input
          type="checkbox"
          id="reading"
          value="Reading"
          v-model="formData.hobbies" />
        <label for="reading">Reading</label>

        <input
          type="checkbox"
          id="writing"
          value="Writing"
          v-model="formData.hobbies" />
        <label for="writing">Writing</label>

        <input
          type="checkbox"
          id="painting"
          value="Painting"
          v-model="formData.hobbies" />
        <label for="painting">Painting</label>
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: "",
        email: "",
        country: "",
        gender: "",
        hobbies: [],
      },
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await fetch(
          "https://data-form-f1db2-default-rtdb.firebaseio.com/dataForm.json",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(this.formData),
          }
        );

        if (response.ok) {
          // Form data was successfully submitted
          console.log("Form data submitted successfully.");
            this.formData = {
            name: '',
            email: '',
            country: '',
            gender: '',
            hobbies: []
          };
        } else {
          console.error("Form data submission failed.");
        }
      } catch (error) {
        console.error(
          "An error occurred while submitting the form data:",
          error
        );
      }
    },
  },
};
</script>
<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.form-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 15px;
  background-color: rgba(0, 0, 0, 0.7);
}
h1 {
  text-align: center;
  margin-bottom: 20px;
  color: greenyellow;
}
label {
  display: block;
  margin-bottom: 8px;
  color: greenyellow;
  font-weight: bold;
}

/* Styling for form input fields */
input[type="text"],
input[type="email"],
select {
  width: 100%;
  padding: 10px;
  border: 1px solid greenyellow;
  border-radius: 5px;
  font-size: 16px;
  margin-bottom: 10px;
  background-color: #fff;
  color: #333;
}

/* Styling for radio and checkbox labels */
input[type="radio"] + label,
input[type="checkbox"] + label {
  display: inline-block;
  margin-right: 10px;
  color: greenyellow;
  font-weight: normal;
}

/* Styling for the submit button */
button[type="submit"] {
  display: block;
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: greenyellow;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: orange;
}
</style>
