<template>
  <section id="team">
    <div class="container">
      <h1>Team</h1>
      <div class="row text-center">
        <a
          class="col-md-3 mb-4 team-item"
          target="_blank"
          href="https://www.linkedin.com/in/maciejkrasowski/"
        >
          <div class="avatar"><img src="../assets/team_1.jpg" /></div>
          <h3>Maciej Krasowski</h3>
          <h4>Chief Executive Officer</h4>
        </a>
        <a
          class="col-md-3 mb-4 team-item"
          target="_blank"
          href="https://www.linkedin.com/in/hkrawczyk/"
        >
          <div class="avatar"><img src="../assets/team_2.jpg" /></div>
          <h3>Hubert Krawczyk</h3>
          <h4>Chief Operating Officer</h4>
        </a>
        <a
          class="col-md-3 mb-4 team-item"
          target="_blank"
          href="https://www.linkedin.com/in/brusiniak/"
        >
          <div class="avatar"><img src="../assets/team_3.jpg" /></div>
          <h3>Bartłomiej Rusiniak</h3>
          <h4>Chief Technical Officer</h4>
        </a>
        <a
          class="col-md-3 mb-4 team-item"
          target="_blank"
          href="https://www.linkedin.com/in/sandra-marta-kami%C5%84ska/"
        >
          <div class="avatar"><img src="../assets/team_4.jpg" /></div>
          <h3>Sandra Kamińska</h3>
          <h4>Product Owner</h4>
        </a>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Team',
};
</script>

<style lang="scss" scoped>
#team {
  h1 {
    margin: 60px 0;
  }

  h3 {
    font-weight: 800;
    font-size: 24px;
    color: #000637;
  }
  h4 {
    font-weight: normal;
    font-size: 14px;
    color: #6d6f8d;
  }
  .team-item {
    text-decoration: none;

    &:hover {
      cursor: pointer;
      opacity: 0.8;

      .avatar::after {
        bottom: 5px;
      }
    }

    .avatar {
      position: relative;
      width: 200px;
      height: 200px;
      display: block;
      margin: 20px auto;

      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2),
          0 6px 20px 0 rgba(0, 0, 0, 0.19);
      }

      &::after {
        content: '';
        background-image: url('../assets/linkedin.png');
        background-repeat: no-repeat;
        background-position: top center;
        background-size: contain;
        width: 32px;
        height: 32px;
        display: block;
        position: absolute;
        bottom: 0;
        right: 0;
        transition: all 0.2s ease;
      }
    }
  }
}
</style>
