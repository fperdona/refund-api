import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'refunds'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      // Adiciona coluna 'date' para guardar a data da despesa
      // É nullable para não quebrar registros antigos
      table.date('date').nullable()
    })
  }

  async down() {
    this.schema.alterTable(this.tableName, (table) => {
      // Remove a coluna se reverter a migration
      table.dropColumn('date')
    })
  }
}
