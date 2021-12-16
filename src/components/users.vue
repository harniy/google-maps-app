<template>
  <v-flex xs6>
    <v-card>
      <v-toolbar color="teal" dark>
        <v-toolbar-title>Users</v-toolbar-title>
      </v-toolbar>

      <v-list>
        <v-list-group v-for="user in users" :key="user.items.email" no-action>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title @click="getCurrentUser(user)">
                {{ user.items[0].firstName }} {{ user.items[0].lastName }}
              </v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>{{ user.items[0].adress }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>{{ user.items[0].number }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>{{ user.items[0].email }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  data() {
    return {
      users: [
        {
          items: [
            {
              firstName: "Alex",
              lastName: "Davinchi",
              adress: "Schopenhauerstraße 6, 1180 Wien",
              number: 16465106465,
              email: "alex@gmail.com",
              map: {
                location: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d554.7792056557817!2d16.34720675473148!3d48.22370437492215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d07c57c706f93%3A0x4eca012f43cb8858!2sBentz!5e0!3m2!1sru!2sua!4v1639690774833!5m2!1sru!2sua`,
              },
            },
          ],
        },
        {
          items: [
            {
              firstName: "Anna",
              lastName: "Shmidt",
              adress: "130 Rte de Pérols, 34970 Lattes",
              number: 972552992024,
              email: "Anna@gmail.com",
              map: {
                location: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d722.7103402141894!2d3.9055284292353574!3d43.5681885986953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b6b00083b0c1c5%3A0xe51bd5673bef94a2!2zMTMwIFJ0ZSBkZSBQw6lyb2xzLCAzNDk3MCBMYXR0ZXMsINCk0YDQsNC90YbQuNGP!5e0!3m2!1sru!2sua!4v1639690909428!5m2!1sru!2sua`,
              },
            },
          ],
        },
        {
          items: [
            {
              firstName: "John",
              lastName: "Travolta",
              adress: "Via di Monte Testaccio, 65b, 00153 Roma RM",
              number: 447944649472,
              email: "John@gmail.com",
              map: {
                location: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1485.4088108991307!2d12.475994082078769!3d41.87527019843324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f602ec71daf0d%3A0x49999bd023664827!2zVmlhIGRpIE1vbnRlIFRlc3RhY2NpbywgNjViLCAwMDE1MyBSb21hIFJNLCDQmNGC0LDQu9C40Y8!5e0!3m2!1sru!2sua!4v1639691023049!5m2!1sru!2sua`,
              },
            },
          ],
        },
                {
          items: [
            {
              firstName: "Liam",
              lastName: "Brown",
              adress: "578 Tremont St, Boston, MA 02118",
              number: 31613355460,
              email: "Liam@gmail.com",
              map: {
                location: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1474.4818474243878!2d-71.07355094182275!3d42.343297394796984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37a6d248087d1%3A0x65bef6e7f31a1105!2zNTc4IFRyZW1vbnQgU3QsIEJvc3RvbiwgTUEgMDIxMTgsINCh0KjQkA!5e0!3m2!1sru!2sua!4v1639691721893!5m2!1sru!2sua`,
              },
            },
          ],
        },
                {
          items: [
            {
              firstName: "Aika",
              lastName: "Takahashi",
              adress: "7-chōme-16-2 Tsukiji, Chuo City, Tokyo 104-0045",
              number: 4915207930698,
              email: "Takahashi@gmail.com",
              map: {
                location: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.4842905991195!2d139.7736614316358!3d35.66507558450851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188963ad9d3eff%3A0xc37558dbb16c41e5!2zNy1jaMWNbWUtMTYtMiBUc3VraWppLCBDaHVvIENpdHksIFRva3lvIDEwNC0wMDQ1LCDQr9C_0L7QvdC40Y8!5e0!3m2!1sru!2sua!4v1639691873046!5m2!1sru!2sua`,
              },
            },
          ],
        },
                {
          items: [
            {
              firstName: "Miguel",
              lastName: "Ángel",
              adress: "Carr. Guadalajara - Tepic 101, 45221 Bosque La Primavera, Jal.",
              number: 48727801958,
              email: "Miguel@gmail.com",
              map: {
                location: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d932.8848219185534!2d-103.54148197080119!3d20.728924899135105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428a81dab6e046f%3A0xff6bb37d9bbb1840!2zQ2Fyci4gR3VhZGFsYWphcmEgLSBUZXBpYyAxMDEsIDQ1MjIxIEJvc3F1ZSBMYSBQcmltYXZlcmEsIEphbC4sINCc0LXQutGB0LjQutCw!5e0!3m2!1sru!2sua!4v1639691991753!5m2!1sru!2sua`,
              },
            },
          ],
        },
                {
          items: [
            {
              firstName: "Jack",
              lastName: "William",
              adress: "australia746 Marion Rd, Marion SA 5043",
              number: 447716885606,
              email: "William@gmail.com",
              map: {
                location: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3268.059782670778!2d138.5551331151718!3d-35.00520858035742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0da818a5841c7%3A0xd3f6f8f2fc4d8554!2zNzQ2IE1hcmlvbiBSZCwgTWFyaW9uIFNBIDUwNDMsINCQ0LLRgdGC0YDQsNC70LjRjw!5e0!3m2!1sru!2sua!4v1639692143390!5m2!1sru!2sua`,
              },
            },
          ],
        },
      ],
    };
  },

  methods: {
    getCurrentUser(user) {
      this.$emit("getCurrentUser", user.items[0]);
    },
  },
};
</script>

<style></style>
