<script setup>
import { useForm } from '@inertiajs/vue3';
import TextInput from '../Components/TextInput.vue';
import { route } from '../../../../vendor/tightenco/ziggy/src/js';

const form = useForm({
    email: null,
    name: null,
    position: null,
    institution: null,
    city: null,
    country: null,
    password: null,
    password_confirmation: null,
});

const submit =() => {
    form.post(route('register'), {
        onError: () => form.reset("password", "password_confirmation"),
    });
};
</script>

<template>
    <Head title=" | Register" />
    <h1 class="title">Register New Account</h1>
    <div class="w-2/4 mx-auto">
        <form @submit.prevent="submit">

            <TextInput name="Email" type="email" v-model="form.email" :message="form.errors.email" />
            <TextInput name="Name" v-model="form.name" :message="form.errors.name" />
            <TextInput name="Position" v-model="form.position" :message="form.errors.position" />
            <TextInput name="Institution" v-model="form.institution" :message="form.errors.institution" />
            <TextInput name="City" v-model="form.city" :message="form.errors.city" />
            <TextInput name="Country" v-model="form.country" :message="form.errors.country" />
            <TextInput name="Password" type="password" v-model="form.password" :message="form.errors.password" />
            <TextInput name="Confirm Password" type="password" v-model="form.password_confirmation" />

            <div>
                <p class="text-slate-600 mb-2">Already a user ? <a :href='route("login")' class="text-link">Login</a></p>
                <button class="primary-btn" :disabled="form.processing">Register</button>
            </div>
        </form>
    </div>
</template>