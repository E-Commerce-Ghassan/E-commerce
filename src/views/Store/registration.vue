<template>
    <div id="registration-container">

        <div id="registration-form">
            <h2>انشاء حساب </h2>
            <form>
                <div class="form-row">
                    <div class="form-group col-md-4">
                        <label for="LastName">الاسم العائلة</label>
                        <input class="form-control" id="LastName" placeholder="الاسم العائلة" type="text">
                    </div>
                    <div class="form-group col-md-4">
                        <label for="SecName">الاسم الاوسط</label>
                        <input class="form-control" id="SecName" placeholder="الاسم الاوسط" type="text">
                    </div>
                    <div class="form-group col-md-4">
                        <label for="Name">الاسم</label>
                        <input class="form-control" id="Name" placeholder="الاسم" type="text">
                    </div>

                </div>
                <div class="form-group ">
                    <label for="phoneNum">رقم الهاتف</label>
                    <input class="form-control" id="phoneNum" placeholder="رقم الهاتف" type="text">
                </div>
                <div class="form-group ">
                    <label for="ID">الهوية</label>
                    <input class="form-control" id="ID" placeholder="الهوية" type="text">
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="PasswordConformation">تاكيد كلمة السر</label>
                        <input class="form-control" id="PasswordConformation" placeholder="تاكيد كلمة السر"
                               type="password">
                    </div>
                    <div class="form-group col-md-6">
                        <label for="Password">كلمة السر</label>
                        <input class="form-control" id="Password" placeholder="كلمة السر" type="password">
                    </div>

                </div>
                <div class="form-group">
                    <label for="inputAddress">العنوان</label>
                    <input class="form-control" id="inputAddress" placeholder="العنوان  " type="text">
                </div>
                <div class="form-group">
                    <label for="company">الشركة</label>
                    <input class="form-control" id="company" placeholder="لشركة" type="text">
                </div>
                <div class="form-group col-md-8">
                    <button class="btn btn-secondary" type="submit">انشاء حساب</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "registration",
        data() {
            return {
                RegistrationModel: {
                    FirstName: '',
                    MiddleName: '',
                    LastName: '',
                    PhoneNumber: '',
                    ID: '',
                    CompanyName: '',
                    Address: '',
                    Password: '',
                    passwordConformation: '',
                }
            }
        }
    }
</script>

<style scoped>
    #registration-container {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        background-color: gainsboro;
    }

    #registration-form > h2 {
        margin: auto;
        margin-bottom: 8px;
    }

    #registration-form {
        text-align: right;
        display: flex;

        margin: auto;
        margin-top: 0px;
        background-color: white;
        color: gray;
        padding: 30px;
        padding-top: 10px;
        padding-bottom: 10px;
        flex-flow: row wrap;
        flex-basis: 50%;
    }

    .form-group {
        margin-bottom: 0.5rem;
    }

    #registration-form > input {
        margin-bottom: 5px;
    }

    #registration-form > button {
        background-color: white;
        color: black;
        border: 2px solid #e7e7e7;
        padding: 16px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        -webkit-transition-duration: 0.4s; /* Safari */
        transition-duration: 0.4s;
        cursor: pointer;
    }

    #registration-form > button:hover {
        background-color: #e7e7e7;
        box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);
    }

    h2 {
        margin: 5px;
    }

    label, input {
        text-align: right;
    }
</style>