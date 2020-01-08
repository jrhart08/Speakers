using System;
using Microsoft.EntityFrameworkCore.Migrations;
using NodaTime;

namespace Speakers.DataMigrations.Migrations
{
    public partial class AddSpeakingEngagements : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.EnsureSchema(
                name: "speakers");

            migrationBuilder.CreateTable(
                name: "speaking_engagement",
                schema: "speakers",
                columns: table => new
                {
                    id = table.Column<Guid>(nullable: false),
                    speaker_name = table.Column<string>(nullable: false),
                    talk_name = table.Column<string>(nullable: false),
                    host_group_name = table.Column<string>(nullable: false),
                    date_time_start = table.Column<LocalDateTime>(nullable: false),
                    date_time_end = table.Column<LocalDateTime>(nullable: false),
                    city = table.Column<string>(nullable: false),
                    state = table.Column<string>(nullable: false),
                    attendance = table.Column<int>(nullable: false),
                    date_created = table.Column<Instant>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_speaking_engagement", x => x.id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "speaking_engagement",
                schema: "speakers");
        }
    }
}
