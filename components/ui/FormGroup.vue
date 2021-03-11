<template>
    <div class="form__group">
        <label class="block text-sm font-medium text-gray-700">{{textLabel}}</label>
        <input class="border-2 rounded-sm my-1 h-10 w-full" :type="inputType" :v-model="inputModel" :name="inputModel"/>
    </div>
</template>

<script>
    export default {
        name:"FormGroup",
        props: {
            textLabel: !String,
            inputType: {
                type: String,
                required: true
            },
            inputModel: String
        }
    }
</script>

<style scoped>
    .form__group {
        margin: 40px 0px;
    }

</style>