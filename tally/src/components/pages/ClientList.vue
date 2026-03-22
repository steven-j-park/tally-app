<script setup lang="ts">
import { ref } from 'vue'

interface Client {
  id: string
  name: string
  filingStatus: string
  clientSinceDate: string
  status: 'Active' | 'Inactive' | 'Archived'
}

const rows = ref(10)
const clients = ref<Client[]>([
  {
    id: '1',
    name: 'John Smith',
    filingStatus: 'Single',
    clientSinceDate: '2022-03-15',
    status: 'Active'
  },
  {
    id: '2',
    name: 'Jane Doe',
    filingStatus: 'Married Filing Jointly',
    clientSinceDate: '2021-01-20',
    status: 'Active'
  },
  {
    id: '3',
    name: 'Robert Johnson',
    filingStatus: 'Single',
    clientSinceDate: '2023-06-10',
    status: 'Active'
  },
  {
    id: '4',
    name: 'Maria Garcia',
    filingStatus: 'Head of Household',
    clientSinceDate: '2020-11-05',
    status: 'Active'
  },
  {
    id: '5',
    name: 'Michael Brown',
    filingStatus: 'Married Filing Separately',
    clientSinceDate: '2023-02-14',
    status: 'Inactive'
  },
  {
    id: '6',
    name: 'Sarah Williams',
    filingStatus: 'Single',
    clientSinceDate: '2019-08-22',
    status: 'Active'
  },
  {
    id: '7',
    name: 'David Miller',
    filingStatus: 'Single',
    clientSinceDate: '2022-09-30',
    status: 'Active'
  },
  {
    id: '8',
    name: 'Emma Davis',
    filingStatus: 'Married Filing Jointly',
    clientSinceDate: '2021-04-12',
    status: 'Active'
  }
])

const handleEdit = (client: Client) => {
  console.log('Edit client:', client)
}

const handleArchive = (client: Client) => {
  console.log('Archive client:', client)
}

const handleAddClient = () => {
  console.log('Add new client')
}
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold mb-6">Client List</h1>
    <div class="flex justify-start mb-4">
      <Button
        label="Add Client"
        icon="pi pi-plus"
        @click="handleAddClient"
      />
    </div>
    <DataTable
      :value="clients"
      :rows="rows"
      :paginator="true"
      paginator-template="RowsPerPageDropdown FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink"
      :rows-per-page-options="[5, 10, 20, 50]"
      responsive-layout="scroll"
      striped-rows
      class="p-datatable-sm"
    >
      <Column field="name" header="Name" />
      <Column field="filingStatus" header="Filing Status" />
      <Column field="clientSinceDate" header="Client Since Date" />
      <Column field="status" header="Status">
        <template #body="{ data }">
          <Tag
            :value="data.status"
            :severity="
              data.status === 'Active'
                ? 'success'
                : data.status === 'Inactive'
                  ? 'warn'
                  : 'secondary'
            "
          />
        </template>
      </Column>
      <Column header="Actions" :exportable="false" style="min-width: 6rem">
        <template #body="{ data }">
          <div class="flex gap-2">
            <Button
              icon="pi pi-pencil"
              rounded
              outlined
              severity="info"
              @click="handleEdit(data)"
              v-tooltip.top="'Edit'"
            />
            <Button
              icon="pi pi-ban"
              rounded
              outlined
              severity="warning"
              @click="handleArchive(data)"
              v-tooltip.top="'Archive'"
            />
          </div>
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<style scoped>

</style>
