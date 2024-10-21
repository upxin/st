<script setup lang="tsx">
// JSX passed directly
let msg = $ref(123);
msg = 456;

defineRender(
  <div>
    <span>
      { msg }
    </span>
  </div>,
);
</script>
