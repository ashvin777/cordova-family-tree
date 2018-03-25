
<script src="./loading.js"></script>
<style scoped lang="scss">
@import '../../../style/consts.scss';

.folding-cube {
  width: 80px;
  height: 80px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.folding-cube .cube {
  float: left;
  width: 50%;
  height: 50%;
  position: relative;
  transform: scale(1.1);
}
.folding-cube .cube:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: $light-blue;
  animation: foldCubeAngle 2.4s infinite linear both;
  transform-origin: 100% 100%;
}
.folding-cube .cube2 {
  transform: scale(1.1) rotateZ(90deg);
}
.folding-cube .cube3 {
  transform: scale(1.1) rotateZ(180deg);
}
.folding-cube .cube4 {
  transform: scale(1.1) rotateZ(270deg);
}
.folding-cube .cube2:before {
  animation-delay: 0.3s;
}
.folding-cube .cube3:before {
  animation-delay: 0.6s;
}
.folding-cube .cube4:before {
  animation-delay: 0.9s;
}
@-webkit-keyframes foldCubeAngle {
  0%,
  10% {
    transform: perspective(140px) rotateX(-180deg);
    opacity: 0;
  }
  25%,
  75% {
    transform: perspective(140px) rotateX(0deg);
    opacity: 1;
  }
  90%,
  100% {
    transform: perspective(140px) rotateY(180deg);
    opacity: 0;
  }
}

@keyframes foldCubeAngle {
  0%,
  10% {
    transform: perspective(140px) rotateX(-180deg);
    opacity: 0;
  }
  25%,
  75% {
    transform: perspective(140px) rotateX(0deg);
    opacity: 1;
  }
  90%,
  100% {
    transform: perspective(140px) rotateY(180deg);
    opacity: 0;
  }
}
</style>

<template>
  <div class="page">
    <div class="folding-cube">
  <div class="cube1 cube"></div>
  <div class="cube2 cube"></div>
  <div class="cube4 cube"></div>
  <div class="cube3 cube"></div>
</div>
  </div>
</template>
