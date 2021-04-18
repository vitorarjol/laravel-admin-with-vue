<template>
    <div class="container-xl">
        <!-- Page title -->
        <div class="page-header d-print-none">
            <div class="row align-items-center">
                <div class="col">
                    <h2 class="page-title">Empty page</h2>
                </div>
            </div>
        </div>
    </div>
    <div class="page-body">
        <div class="container-xl">
            <!-- Content here -->
        </div>
    </div>
</template>

<script lang="ts" name="Dashboard" setup>
import { defineProps } from "vue";

const props = defineProps({
    errors: {
        type: Object,
        required: true
    }
})
</script>