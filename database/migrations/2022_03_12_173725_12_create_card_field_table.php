<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('card_field', function (Blueprint $table) {
            $table->foreignId('field_id')->constrained()->onDelete('cascade');
            $table->foreignId('card_id')->constrained()->onDelete('cascade');
            $table->unique(['field_id', 'card_id']);
            $table->text('value');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('card_field');
    }
};
